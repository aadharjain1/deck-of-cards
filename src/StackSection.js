import React from 'react';
import CardStack from './CardStack';
import './stack-section.scss';
import { suits } from './utils/index.js';

const StackSection = ({ stackedCards, state, setState }) => {
    return(
        <div className="stackSection">
            {
                suits.map(suit => <CardStack type={suit} suitStackedCards={stackedCards[suit]} state={state} setState={setState} key={suit}></CardStack>)
            }
        </div>
    );
};

export default StackSection;