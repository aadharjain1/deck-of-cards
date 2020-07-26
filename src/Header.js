import React from 'react';
import './header.scss';

const Header = ({ setState, createInitialState }) => {
    return(
        <header className="header">
            <div className="title">Deck of Cards</div>
            <button className="primaryBtn" id="newGameBtn" onClick={() => setState(createInitialState())}>New Game</button>
        </header>
    );
};

export default Header;