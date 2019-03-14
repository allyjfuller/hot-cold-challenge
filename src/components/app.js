import React from 'react';
import TopNavbar from './top-navbar.js';
import GuessCard from './guess-card.js';
import Instructions from './instructions.js';
import Status from './status.js';

export default class App extends React.Component {
	constructor(props) {
	super(props);
	this.state = {
		guesses: [],
		guessFeedback: 'Make your guess!',
		correctAnswer: Math.floor(Math.random() * 100) + 1
	};
}

restartGame() {
	this.setState({
		guesses: [],
		guessFeedback: 'Make your guess!',
		correctAnswer: Math.floor(Math.random() * 100) + 1
	});
}

makeGuess(guess) {
	guess = parseInt(guess, 10);
		if (isNaN(guess)) {
			this.setState({ feedback: 'Please enter a valid number' });
		return;

		}

	const difference = Math.abs(guess - this.state.correctAnswer);

	let guessFeedback;
	if (difference >= 50) {
		guessFeedback = 'You\'re Ice Cold...';
	} else if (difference >= 30) {
		guessFeedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      guessFeedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      guessFeedback = 'You\'re Hot!';
    } else {
      guessFeedback = 'You got it!';
    }

    this.setState({
      guessFeedback,
      guesses: [...this.state.guesses, guess]
    });

    document.title = guessFeedback ? `${guessFeedback} | Hot or Cold` : 'Hot or Cold';
}
	

render() {
	const { guessFeedback, guesses } = this.state;
	const guessCounter = guesses.length;

	return(
		<div>
			<TopNavbar onRestartGame={() => this.restartGame()} />

			<GuessCard
				guessFeedback={guessFeedback}
				guessCounter={guessCounter}
				onGuess={guess => this.makeGuess(guess)}
			/>
			<Status guesses={guesses} />
			<Instructions />
		</div>
		);

	}
}