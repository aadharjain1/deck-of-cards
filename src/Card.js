import React from 'react';
import hearts from './assets/hearts.png';
import diamonds from './assets/diamonds.png';
import spades from './assets/spades.png';
import clubs from './assets/clubs.png';
import './card.scss';
import { randomGenerator } from './utils';

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

const onDragStart = e => {
    e.dataTransfer.setData('cardId', e.currentTarget.id);
    e.dataTransfer.dropEffect = "move";
};

const Card = ({ type, number }) => {
    let displayNumber = getDisplayNumber(number);
    let top = randomGenerator(0, 60);
    let left = randomGenerator(3, 85);
    let zIndex = randomGenerator(0, 10);

    return(
        <div className="card" id={type+number} draggable onDragStart={e => onDragStart(e)} style={{ color: typeInfo[type].color, position: "absolute", top: `${top}%`, left: `${left}%`, zIndex: zIndex }}>
            <div className="topNumber">{displayNumber}</div>
            <div className="cardImage">
                <img src={typeInfo[type].image} alt="Suit Icon" draggable="false" />
            </div>
            <div className="bottomNumber">{displayNumber}</div>
        </div>
    );
};

export default Card;