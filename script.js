"use strict";
let spaceKey = document.querySelector(".space-key");
let scoreMsg = document.querySelector(".score");
let highScoreMsg = document.querySelector(".high-score");
let message = document.querySelector(".message");
let score = 0;
let highScore = 0;
let start = 0;
document.addEventListener("keydown", function (e) {
  if (e.key === " ") {
    if (score === 0 && start === 1) {
    }
    spaceKey.style.backgroundImage = 'url("spaceKeyPressed2.png")';
  }
});
document.addEventListener("keyup", function (e) {
  if (e.key === " " && start === 1) {
    score++;
    scoreMsg.textContent = score;
    spaceKey.style.backgroundImage = 'url("spaceKey.png")';
  }
});

document.addEventListener("keydown", function (x) {
  if (x.key === "Enter") {
    start = 1;
    let timeLeft = 6;
    let gameTimer = setInterval(function () {
      timeLeft--;
      message.textContent = `Time Left : ${timeLeft} s`;
      document.querySelector(".text").textContent = "Space Bar";
      if (timeLeft <= 0) {
        clearInterval(gameTimer);
        message.textContent = "Game Over! Press Enter To Play Again";
        start = 0;
        if (score > highScore) {
          highScoreMsg.textContent = score;
        }
        score = 0;
      }
    }, 500);
  }
});
