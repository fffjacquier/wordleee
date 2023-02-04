import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import Guesses from '../Guesses';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const rangeGuesses = range(0, NUM_OF_GUESSES_ALLOWED, 1).map(() => ({
  label: '     ',
  id: Math.random(),
}));

function Game() {
  const [guesses, setGuesses] = React.useState(rangeGuesses);
  const [guessCount, setGuessCount] = React.useState(0);

  const handleGuess = (label) => {
    const newGuess = {
      label,
      id: Math.random(),
    };
    const nextGuesses = [...guesses];
    nextGuesses[guessCount] = newGuess;
    setGuesses(nextGuesses);
    setGuessCount(guessCount + 1);
  };

  return (
    <>
      <Guesses guesses={guesses} />
      <GuessInput handleGuess={handleGuess} />
    </>
  );
}

export default Game;
