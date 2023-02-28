let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const resultChoice_span = document.getElementById("result-choice");
const resultMessage_span = document.getElementById("result-message");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function compChoice() {
  const choices = ["rock", "paper", "scissor"];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function userWin(userInput, compInput) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  resultMessage_span.style.color = "darkseagreen";
  resultMessage_span.innerHTML = "You won!";
}
function userLose(userInput, compInput) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  resultMessage_span.style.color = "firebrick";
  resultMessage_span.innerHTML = "You lost!";
}
function draw(userInput, compInput) {
  resultMessage_span.style.color = "white";
  resultMessage_span.innerHTML = "It's a draw!";
}

function game(userInput) {
  const compInput = compChoice();
  resultChoice_span.innerHTML =
    "You chose " + userInput + ". Computer chose " + compInput + ".";
  if (compInput == userInput) {
    draw(userInput, compInput);
  } else {
    if (
      (compInput == "rock" && userInput == "scissor") ||
      (compInput == "paper" && userInput == "rock") ||
      (compInput == "scissor" && userInput == "paper")
    ) {
      userLose(userInput, compInput);
    } else {
      userWin(userInput, compInput);
    }
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
  });

  paper_div.addEventListener("click", function () {
    game("paper");
  });

  scissor_div.addEventListener("click", function () {
    game("scissor");
  });
}

main();
