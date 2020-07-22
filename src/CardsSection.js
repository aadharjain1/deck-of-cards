import React from 'react';
import Card from './Card';
import { suits } from './utils';
import './cards-section.scss';

const CardsSection = () => {
    return(
        <div className="cardsSection">
            {
                suits.map(suit => {
                    const cards = [];
                    for(let i=1;i<=13;i++)
                        cards.push(<Card type={suit} number={i} key={suit + i}></Card>);
                    return cards;
                })
            }
        </div>
    );
};

export default CardsSection;