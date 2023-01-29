"use strict";
const game = ["Rock", "Paper", "Scissors"];

const play = () => {
  const user = game[Math.trunc(Math.random() * 3)];
  const computer = game[Math.trunc(Math.random() * 3)];
  console.log(`Computer choice: "${computer}"`);
  console.log(`User choice: "${user}"`);

  if (
    (user == "Rock" && computer == "Paper") ||
    (user == "Paper" && computer == "Scissors") ||
    (user == "Scissors" && computer == "Rock")
  ) {
    console.log("Computer wins!");
  } else if (
    (user == "Rock" && computer == "Scissors") ||
    (user == "Paper" && computer == "Rock") ||
    (user == "Scissors" && computer == "Paper")
  ) {
    console.log("User wins!");
  } else {
    console.log("Both computer and user had the same choice!");
  }
};

play();
