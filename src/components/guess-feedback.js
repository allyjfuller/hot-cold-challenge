import React from 'react';
import './guess-feedback.css';

export default function GuessFeedback(props) {
	const key = props.guessCounter;

	let guessAgain;
	if (key !== 0) {
		guessAgain = <span className="visuallyhidden">Guess again!</span>;
	}

	return(

		<h2
			key={key}
			id="guessFeedback"
		>
		{props.guessFeedback} {guessAgain}
		</h2>


	);
}