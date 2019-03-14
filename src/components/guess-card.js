import React from 'react';
import GuessForm from './components/guess-form';
import GuessFeedback from './components/guess-feedback';

export default function GuessCard(props) {
	const {guessFeedback, guessCounter} = props;

	return(

		<GuessFeedback guessFeedback={guessFeedback} guessCounter={guessCounter} />
		<GuessForm onGuess={guess => props.onGuess(guess)} />

	);
}
