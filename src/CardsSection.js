import React from 'react';
import Card from './Card';
import { suits } from './utils';
import './cards-section.scss';

const CardsSection = ({ cardsLayout }) => {
    return(
        <div className="cardsSection">
            {
                suits.map(suit => {
                    return cardsLayout[suit].map(cardDetails => <Card type={suit} cardDetails={cardDetails} key={suit+cardDetails.number}></Card>);
                })
            }
        </div>
    );
};

export default CardsSection;