import React from 'react';
import Header from './header';
import GuessCard from './guess-card';
import Status from './status';
import Instructions from './instructions';
// connect component to redux
import { connect } from 'react-redux'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }

  restartGame() {
    this.setState({
      guesses: [],
      feedback: 'Make your guess!',
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

    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });

    document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
  }

  render() {
    const { feedback, guesses } = this.state;
    const guessCount = guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => this.restartGame()}
        />
        <main role="main">
          <GuessCard
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <Status guesses={guesses} 
          />
          <Instructions />
        </main>
      </div>
    );
  }
}

// mapStateToProps
const mapStateToProps = (state) => ({
// ask about this in session
    onRestartGame: state.restartGame

})
export default connect(mapStateToProps)(Game);

