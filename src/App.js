import React from 'react';
import Header from './Header';
import GameSection from './GameSection';
import Footer from './Footer';
import './App.scss';

function App() {
	return (
		<div className="App">
			<Header></Header>
			<GameSection></GameSection>
			<Footer></Footer>
		</div>
	);
}

export default App;
