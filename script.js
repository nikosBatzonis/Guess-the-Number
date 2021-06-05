"use strict";

let selectNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayNumber = function (num) {
  document.querySelector(".number").textContent = num;
};
const displayScore = function (scores) {
  document.querySelector(".score").textContent = scores;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("No number!");
  } else if (guess === selectNumber) {
    displayMessage("Correct Number!");
    displayNumber(selectNumber);

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== selectNumber) {
    if (score > 1) {
      displayMessage(guess > selectNumber ? "Too high!" : "Too low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("You lost the game!");

      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  selectNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayScore(score);
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing...!");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
