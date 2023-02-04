import React from 'react';

const Guess = ({ guess, checks }) => {
  console.log(guess, checks);
  const letters = guess.split('');

  return (
    <p className="guess">
      {letters.map((letter, index) => (
        <span className={`cell ${checks[index] ? checks[index].status : ''}`} key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
};

export default Guess;
