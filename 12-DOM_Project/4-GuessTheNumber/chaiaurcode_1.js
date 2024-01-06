const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min) + 1);
console.log(randomNumber);
let userAttempts = 10;
const previousGuess = [];
const result = document.querySelector(".lowOrHi");
const form = document.querySelector("form");
const guesses = document.querySelector(".guesses");
const guessRemaining = document.querySelector(".lastResult");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  userCurrentGuess = parseInt(document.getElementById("guessField").value);

  if (userAttempts == 0) {
    result.innerHTML = "Game Over";
  } else {
    if (
      userCurrentGuess === "" ||
      userCurrentGuess < 0 ||
      isNaN(userCurrentGuess)
    ) {
      result.innerHTML = "Please Enter A Valid Number";
    }

    if (userCurrentGuess === randomNumber) {
      result.innerHTML = "You Won";
    }
    if (userCurrentGuess != randomNumber) {
      if (userCurrentGuess > randomNumber) {
        result.innerHTML = "The Actual Number Is Low";
      } else {
        result.innerHTML = "The Actual Number Is High";
      }
      previousGuess.push(userCurrentGuess);
      console.log(previousGuess);
      guesses.append(userCurrentGuess + ",");
      userAttempts = userAttempts - 1;
      guessRemaining.innerHTML = `${userAttempts}`;
    }
  }
});
