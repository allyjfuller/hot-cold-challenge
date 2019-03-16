import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';

export default function GuessCard(props) {
  const { feedback, guessCount } = props;
  return (
    <div>
      <Feedback feedback={feedback} guessCount={guessCount} />
      <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
    </div>
  );
}
