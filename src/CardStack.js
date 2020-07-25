import React from 'react';
import './cardstack.scss';

const onDragOver = e => {
    e.preventDefault();
};

const CardStack = ({ type }) => {
    const onDrop = e => {
        const cardId = e.dataTransfer.getData('cardId');
        if(cardId.includes(type)){
            const card = document.getElementById(cardId);
            card.style.top = '-1px';
            card.style.left = '-1px';
            card.style.zIndex = 0;
            e.currentTarget.parentElement.querySelector('.cardContainer').appendChild(card);
        }
    };

    return(
        <div className="cardStack">
            <div className="default">
                {type}
            </div>
            <div className="cardContainer"></div>
            <div className="dropContainer" onDrop={e => onDrop(e)} onDragOver={e => onDragOver(e)}></div>
        </div>
    );
};

export default CardStack;