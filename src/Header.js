import React from 'react';
import './header.scss';

const Header = () => {
    return(
        <header className="header">
            <div className="title">Deck of Cards</div>
            <button className="primaryBtn" id="newGameBtn">New Game</button>
        </header>
    );
};

export default Header;