import React from "react";
import styled from "styled-components";
import avatar from './images/avatar3.jpeg';

import content from "./content";
import { Type1, Type4 } from "./Typography";
import Avatar from "./Avatar";
import Card from "./Card";

const StyledCardGrid = styled.div`
   position: relative;
   display: grid;
   grid-gap: 24px;
   grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
   margin: 16px 0;
`;

const CardGrid = ({ wide = false, ...props }) => {

    const gridClasses = wide ? "grid grid--wide" : "grid";

    return (
        <StyledCardGrid className={gridClasses} {...props}>
            <Card
                borderColor={content.colors.gray["200"]}
                cardColor={content.colors.gray["100"]}
                simpleCard>
                <Avatar
                    zoom
                    src={avatar}
                    style={{
                        width: "40px",
                        height: "40px",
                        border: "8px solid #fff",
                        margin: "24px auto 4px"
                    }}
                />
                <Type1 style={{ fontSize: "40px", lineHeight: "48px" }}>242</Type1>
                <Type4>Assigned<br />to you</Type4>
            </Card>
        </StyledCardGrid>
    )
}

export default CardGrid;