import React from 'react';

const GuessInput = ({ handleGuess }) => {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleGuess(guess);
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        required
        type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
};

export default GuessInput;
