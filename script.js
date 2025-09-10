let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  attempts++;

  if (isNaN(guess)) {
    document.getElementById("feedback").textContent = "Please enter a valid number.";
    return;
  }

  if (guess < secretNumber) {
    document.getElementById("feedback").textContent = "Too low. Try again.";
  } else if (guess > secretNumber) {
    document.getElementById("feedback").textContent = "Too high. Try again.";
  } else {
    document.getElementById("feedback").textContent = `Congratulations! You guessed it in ${attempts} attempts.`;
  }
}