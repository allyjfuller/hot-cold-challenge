import React from 'react';

import GuessList from './guess-list';
import GuessCount from './guess-count';

export default function StatusSection(props) {
  const { guesses } = props;
  const guessCount = guesses.length;

  return (
    <div>
      <GuessCount guessCount={guessCount} />
      <GuessList guesses={guesses} />
    </div>
  );
}