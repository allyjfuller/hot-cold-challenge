import React from 'react';
import './guess-counter.css';

export default function GuessCounter(props) {
	const isPlural = props.guessCounter !==1;
	const guessNoun = isPlural ? 'guesses' : 'guess';

	return(
		<h2 id="guessCounter">

		You've made <span id="count">{props.guessCount}</span> {guessNoun}!</h2>
	);
}