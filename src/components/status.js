import React from 'react';
import GuessedList from './guessed-list.js';
import GuessCounter from './guess-counter.js';

export default function Status(props) {
	const { guesses } = props;
	const guessCounter = guesses.length;

	return (
		<div>
		<GuessCounter guessCounter={guessCounter} />
		<GuessedList guesses={guesses} />
		</div>

	);
}
