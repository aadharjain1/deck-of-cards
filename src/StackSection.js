import React from 'react';
import CardStack from './CardStack';
import './stack-section.scss';
import { suits } from './utils/index.js';

const StackSection = () => {
    return(
        <div className="stackSection">
            {
                suits.map(suit => <CardStack type={suit} key={suit}></CardStack>)
            }
        </div>
    );
};

export default StackSection;