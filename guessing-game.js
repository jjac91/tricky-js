function guessingGame() {
  const number = Math.floor(Math.random() * 100);
  let gameOver = false;
  let guesses = 0;

  return function guess(num) {
    if (gameOver === true) {
      return "The game is over, you already won!";
    } else {
      guesses++;
      if (num === number) {
        gameOver = true
        return `You win! You found 60 in ${guesses} guesses.`;
      } else if (num > number) {
        return `${num} is too high!`;
      } else {
        return `${num} is too low!`;
      }
    }
  };
}

module.exports = { guessingGame };
