import React from 'react';
import StackSection from './StackSection';
import CardsSection from './CardsSection';
import './game-section.scss';

const GameSection = () => {
    return(
        <div className="gameSection">
            <StackSection></StackSection>
            <CardsSection></CardsSection>
        </div>
    );
};

export default GameSection;