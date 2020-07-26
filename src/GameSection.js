import React from 'react';
import StackSection from './StackSection';
import CardsSection from './CardsSection';
import './game-section.scss';

const GameSection = ({ state, setState }) => {
    return(
        <div className="gameSection">
            <StackSection stackedCards={state.stackedCards} state={state} setState={setState}></StackSection>
            <CardsSection cardsLayout={state.cardsLayout}></CardsSection>
        </div>
    );
};

export default GameSection;