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

const setData = e => {
    e.dataTransfer.setData('cardId', e.currentTarget.id);
    e.dataTransfer.dropEffect = "move";
};

const Card = ({ type, number }) => {
    let displayNumber = number;
    let top = randomGenerator(0, 60);
    let left = randomGenerator(3, 85);

    switch(number){
        case 1:
            displayNumber = 'A';
            break;
        case 11:
            displayNumber = 'J';
            break;
        case 12:
            displayNumber = 'Q';
            break;
        case 13:
            displayNumber = 'K';
            break;
        default:
            displayNumber = number;
            break;
    }
    return(
        <div className="card" id={type+number} draggable onDragStart={e => setData(e)} style={{ color: typeInfo[type].color, position: "absolute", top: `${top}%`, left: `${left}%` }}>
            <div className="topNumber">{displayNumber}</div>
            <div className="cardImage">
                <img src={typeInfo[type].image} alt="Suit Icon" draggable="false" />
            </div>
            <div className="bottomNumber">{displayNumber}</div>
        </div>
    );
};

export default Card;