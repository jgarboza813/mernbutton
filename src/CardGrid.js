import React, { useState, useEffect } from "react";
import styled from "styled-components";
import avatar from './images/avatar3.jpeg';

import content from "./content";
import { Type1, Type4 } from "./Typography";
import Avatar from "./Avatar";
import Card from "./Card";

const isServerErrorResponse = ({ ok, status }) => !ok && status === 400;

const StyledCardGrid = styled.div`
   position: relative;
   display: grid;
   grid-gap: 24px;
   grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
   margin: 16px 0;
`;

const CardGrid = ({ wide = false, ...props }) => {

    const [state, setState] = useState(0);
    const gridClasses = wide ? "grid grid--wide" : "grid";

    const fetchClicks = async () => {
        try {
            const response = await fetch('/api/clicks');

            if (isServerErrorResponse(response)) {
                console.log('Gott 400 from service');
                return;
            }

            const data = await response.json();
            setState(data.total);
        } catch (error) {
            console.log('Error!');
            console.log(error);
        }
    }

    useEffect(() => {
        fetchClicks().then(() => {});
    }, []);

    const handleClick = async () => {
        try {
            const response = await fetch('/api/clicks', {
                method: 'POST',
                body: JSON.stringify({ newTotal: state + 1 }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (isServerErrorResponse(response)) {
                console.log('Got 400 from service');
                return;
            }

            const data = await response.json();
            setState(data.total);

        } catch (error) {
            console.log('Error!');
            console.log(error);
        }
    }

    return (
        <StyledCardGrid className={gridClasses} {...props}>
            <Card
                borderColor={content.colors.gray["200"]}
                cardColor={content.colors.gray["100"]}
                simpleCard
                onClick={handleClick}>
                <Avatar
                    zoom
                    src={avatar}
                    style={{
                        width: "40px",
                        height: "40px",
                        border: "8px solid #fff",
                        margin: "24px auto 4px"
                    }} />
                <Type1 style={{ fontSize: "40px", lineHeight: "48px" }}>{state}</Type1>
                <Type4>Number<br />of clicks</Type4>
            </Card>
        </StyledCardGrid>
    )
}

export default CardGrid;