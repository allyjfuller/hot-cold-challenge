import React from 'react';
import './guess-form.css';

export default class GuessForm extends React.Component {
	onSubmit(event) {
		event.preventDefault();

		if (this.props.onGuess) {
			const value = this.input.value;
			this.props.onGuess(value);

		}
	}

	render() {
		return(


			)
	}
}