import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import Guesses from '../Guesses';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const rangeGuesses = range(0, NUM_OF_GUESSES_ALLOWED, 1).map(() => ({
  label: '     ',
  id: Math.random(),
  checks: [],
}));

function Game() {
  const [guesses, setGuesses] = React.useState(rangeGuesses);
  const [guessCount, setGuessCount] = React.useState(0);
  const [hasWin, setHasWin] = React.useState(false);
  const [hasLost, setHasLost] = React.useState(false);
  let checks;

  const handleGuess = (label) => {
    checks = checkGuess(label, answer);
    const newGuess = {
      label,
      id: Math.random(),
      checks,
    };
    const nextGuesses = [...guesses];
    nextGuesses[guessCount] = newGuess;

    setGuesses(nextGuesses);
    const nextGuessCount = guessCount + 1;
    setGuessCount(nextGuessCount);

    if (
      checks.every((check) => check.status === 'correct') &&
      nextGuessCount <= NUM_OF_GUESSES_ALLOWED
    ) {
      setHasWin(true);
      console.log('WIN', hasWin);
    } else if (nextGuessCount > NUM_OF_GUESSES_ALLOWED) {
      setHasLost(true);
      console.log('LOST');
    }
  };

  return (
    <>
      <Guesses guesses={guesses} />
      <GuessInput handleGuess={handleGuess} />
      {hasWin && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guessCount} guesses</strong>.
          </p>
        </div>
      )}
      {hasLost && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
