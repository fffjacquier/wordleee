import React from 'react';

const Guess = ({ guess }) => {
  console.log(guess);
  const letters = guess.split('');

  return (
    <p className="guess">
      {letters.map((letter, index) => (
        <span class="cell" key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
};

export default Guess;
