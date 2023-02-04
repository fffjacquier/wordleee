import React from 'react';
import Guess from '../Guess';

const Guesses = ({ guesses }) => {
  return (
    <div className="guess-results">
      {guesses.map(({ label, id }) => (
        <Guess key={id} guess={label} />
      ))}
    </div>
  );
};

export default Guesses;
