import React from 'react';
import './guessed-list.css';

export default function GuessedList(props) {
	const guesses = props.guesses.map((guess, index) => (

	<li key={index}> {guess} </li>

	));

	return(

		<ul id="guessedList" className="guessedBox clearfix"> {guesses} </ul>

	);
}