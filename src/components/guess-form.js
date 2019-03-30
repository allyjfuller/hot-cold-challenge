import React from 'react';
// connect component to redux
import { connect } from 'react-redux'

import './guess-form.css';

class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    if (this.props.onMakeGuess) {
      const value = this.input.value;
      this.props.onMakeGuess(value);
    }
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          ref={input => (this.input = input)}
        />
        <button 
          type="submit"
          name="submit"
          id="guessButton" 
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}

// mapStateToProps method so we can use that state in our component via props
// takes one argument: the state from redux store
const mapStateToProps = (state) => ({
  // state accesses the property in the guess-form reducer
  // ask about this in session
  onMakeGuess: state.guessForm.makeGuess
})

// guess form component now connected to Redux
// we can now get some state and update some state
export default connect(mapStateToProps)(GuessForm);