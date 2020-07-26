import React from 'react';
import hearts from './assets/hearts.png';
import diamonds from './assets/diamonds.png';
import spades from './assets/spades.png';
import clubs from './assets/clubs.png';
import './card.scss';

const typeInfo = {
    hearts: {
        color: 'red',
        image: hearts
    },
    diamonds: {
        color: 'red',
        image: diamonds
    },
    spades: {
        color: 'black',
        image: spades
    },
    clubs: {
        color: 'black',
        image: clubs
    }
};

const getDisplayNumber = number => {
    switch(number){
        case 1:
            return 'A';
        case 11:
            return 'J';
        case 12:
            return 'Q';
        case 13:
            return 'K';
        default:
            return number;
    };
};

const Card = ({ type, cardDetails, stacked = false }) => {
    const onDragStart = e => {
        e.dataTransfer.setData('cardDetails', JSON.stringify({[type]: {...cardDetails}}));
        e.dataTransfer.dropEffect = "move";
    };

    let displayNumber = getDisplayNumber(cardDetails.number);

    return(
        <div className={stacked ? "card stackedCard" : "card"} id={type+cardDetails.number} draggable onDragStart={e => onDragStart(e)} style={{ color: typeInfo[type].color, top: `${cardDetails.top}%`, left: `${cardDetails.left}%`, zIndex: cardDetails.zIndex }}>
            <div className="topNumber">{displayNumber}</div>
            <div className="cardImage">
                <img src={typeInfo[type].image} alt="Suit Icon" draggable="false" />
            </div>
            <div className="bottomNumber">{displayNumber}</div>
        </div>
    );
};

export default Card;