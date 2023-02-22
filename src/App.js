import React from 'react';

import data from "./data";

import Header from "./components/Header";
import Card from "./components/Card";

export default function App() {
	let cards = data.map((card) => {
		return <Card
			key = {card.id}
			item = {card}
		/>
	})

	return(
		<div>
			<Header/>
			<div className='card-container'>
				{cards}
			</div>
			{/* <h1>Hello World!</h1> */}
		</div>
	)
}