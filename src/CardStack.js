import React from 'react';
import './cardstack.scss';

const onDragOver = e => {
    e.preventDefault();
};

const onDrop = e => {
    const card = document.getElementById(e.dataTransfer.getData('cardId'));
    card.style.top = 0;
    card.style.left = 0;
    e.currentTarget.appendChild(card);
};

const CardStack = ({ type }) => {
    return(
        <div className="cardStack" onDrop={e => onDrop(e)} onDragOver={e => onDragOver(e)}>
            {type}
        </div>
    );
};

export default CardStack;