import React, { useState } from 'react';
import Header from './Header';
import GameSection from './GameSection';
import Footer from './Footer';
import './app.scss';
import { suits, randomGenerator } from './utils';

const createInitialState = () => {
	const cardsLayout = {};
	suits.forEach(suit => {
		cardsLayout[suit] = [];
		for(let i=1;i<=13;i++){
			cardsLayout[suit].push({number: i, top: randomGenerator(0, 60), left: randomGenerator(3, 85), zIndex: randomGenerator(0, 10)});
		}
	});

	const stackedCards = {};
	suits.forEach(suit => stackedCards[suit] = []);
	return { cardsLayout: cardsLayout, stackedCards: stackedCards };
}

function App() {
	const [state, setState] = useState(createInitialState());

	return (
		<div className="App">
			<Header setState={setState} createInitialState={createInitialState}></Header>
			<GameSection state={state} setState={setState}></GameSection>
			<Footer></Footer>
		</div>
	);
}

export default App;