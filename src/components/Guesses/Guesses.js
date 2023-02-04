import React from 'react';
import Guess from '../Guess';

const Guesses = ({ guesses }) => {
  return (
    <div className="guess-results">
      {guesses.map(({ label, id, checks }) => (
        <Guess key={id} guess={label} checks={checks} />
      ))}
    </div>
  );
};

export default Guesses;
