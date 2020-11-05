import React, { useState } from 'react';
import StyledSimpleCard from './StyledSimpleCard';

const Card = ({ loading, children }) => {
    return (
        <StyledSimpleCard
            cardColor="#f1f5fb"
            borderColor="#f1f5fb"
            iconColor="#b8bbc2"
            shadowColor="#b8bbc2"
            className="card"
            easeSpeed={0.5}
            easeFunction="linear">
            <div className={`card__content${loading ? " loading" : ""}`}>
                {children}
            </div>
        </StyledSimpleCard>
    )
};

export default Card;