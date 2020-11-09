import React, { useState, useEffect } from 'react';
import StyledSimpleCard from './StyledSimpleCard';

const Card = ({ loading, children }) => {

    const [cardVisibility, updateCardVisibility] = useState(false);
    const cardClasses = "card";

    useEffect(() => {
        updateCardVisibility(true);
    }, []);

    return (
        <StyledSimpleCard
            cardColor="#f1f5fb"
            borderColor="#f1f5fb"
            iconColor="#b8bbc2"
            shadowColor="#b8bbc2"
            className={`${cardClasses}${cardVisibility ? " fade-in" : ""}`}
            easeSpeed={0.5}
            easeFunction="cubic-bezier(0.2, 0, 0.38, 0.9)">
            <div className={`card__content${loading ? " loading" : ""}`}>
                {children}
            </div>
        </StyledSimpleCard>
    )
};

export default Card;