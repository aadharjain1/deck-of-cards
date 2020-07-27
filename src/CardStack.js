import React from 'react';
import Card from './Card';
import './cardstack.scss';
import { typeInfo } from './utils';

const onDragOver = e => {
    e.preventDefault();
};

const onDrop = (e, type, state, setState) => {
    const cardDetails = JSON.parse(e.dataTransfer.getData('cardDetails')) || {};
    if(cardDetails[type]){
        const newState = {...state};
        newState.cardsLayout[type] = state.cardsLayout[type].filter(card => {
            return card.number !== cardDetails[type].number;
        });
        newState.stackedCards[type].push(cardDetails[type]);
        setState(newState);
        // const card = document.getElementById(cardId);
        // card.style.top = '-1px';
        // card.style.left = '-1px';
        // card.style.zIndex = 0;
        // e.currentTarget.parentElement.querySelector('.cardContainer').appendChild(card);
    }
};

const CardStack = ({ type, suitStackedCards, state, setState }) => {
    return(
        <div className="cardStack">
            <div className="default">
                <img src={typeInfo[type].image} alt="Suit Icon" draggable="false" className="suitRefImage" />
                {type}
            </div>
            <div className="cardContainer">
                {suitStackedCards.map(suitStackedCard => <Card type={type} cardDetails={suitStackedCard} stacked={true} key={type+suitStackedCard.number}></Card>)}
            </div>
            <div className="dropContainer" onDrop={e => onDrop(e, type, state, setState)} onDragOver={e => onDragOver(e)}></div>
        </div>
    );
};

export default CardStack;