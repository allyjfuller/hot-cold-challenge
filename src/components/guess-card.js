import React from 'react';
import GuessForm from './guess-form.js';
import GuessFeedback from './guess-feedback.js';

export default function GuessCard(props) {
	const {guessFeedback, guessCounter} = props;

	return(
		<div>
		<GuessFeedback guessFeedback={guessFeedback} guessCounter={guessCounter} />
		<GuessForm onGuess={guess => props.onGuess(guess)} />
		</div>

	);
}
