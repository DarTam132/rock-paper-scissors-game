// const game = ["Rock", "Paper", "Scissors"];

// const play = () => {
//   const user = game[Math.trunc(Math.random() * 3)];
//   const computer = game[Math.trunc(Math.random() * 3)];
//   console.log(`Computer choice: "${computer}"`);
//   console.log(`User choice: "${user}"`);

//   for (let i = 0; i < game.length; i++) {
//     if (
//       (user == "Rock" && computer == "Paper") ||
//       (user == "Paper" && computer == "Scissors") ||
//       (user == "Scissors" && computer == "Rock")
//     ) {
//       console.log("Computer wins!");
//     } else if (
//       (user == "Rock" && computer == "Scissors") ||
//       (user == "Paper" && computer == "Rock") ||
//       (user == "Scissors" && computer == "Paper")
//     ) {
//       console.log("User wins!");
//     } else {
//       console.log("Both computer and user had the same choice!");
//     }
//   }
// };

// play();
const rock = "./img/game-element-1.png";
const img = [
  "./img/game-element-1.png",
  "./img/game-element-2.png",
  "./img/game-element-3.png",
];

const userRockBtn = document.querySelector(".rock");
const userPaperBtn = document.querySelector(".paper");
const userScissorsBtn = document.querySelector(".scissors");
const playBtn = document.querySelector(".play");
const newRoundBtn = document.querySelector(".new-round");
const againBtn = document.querySelector(".again");
let outOfTheShell = true;
let newRound = true;

const userChoiceImg = document.querySelector(".userChoice");
const computerChoiceImg = document.querySelector(".computerChoice");
let userScore = document.querySelector(".user-score");
let computerScore = document.querySelector(".computer-score");
let scoreUsr = 0;
let scoreCmp = 0;
userScore.textContent = scoreUsr;
computerScore.textContent = scoreCmp;

const scoreKeeper = () => {
  if (
    (userChoiceImg.src == img[2] && computerChoiceImg.src == img[0]) ||
    (userChoiceImg.src == img[1] && computerChoiceImg.src == img[2]) ||
    (userChoiceImg.src == img[0] && computerChoiceImg.src == img[1])
  ) {
    scoreUsr++;
    userScore.textContent = scoreUsr;
  } else if (
    (computerChoiceImg.src == img[2] && userChoiceImg.src == img[0]) ||
    (computerChoiceImg.src == img[1] && userChoiceImg.src == img[2]) ||
    (computerChoiceImg.src == img[0] && userChoiceImg.src == img[1])
  ) {
    scoreCmp++;
    computerScore.textContent = scoreCmp;
  }
  if (scoreUsr === 5) {
    newRound = false;
    alert("Congratulations, you win over the computer!");
  } else if (scoreCmp === 5) {
    newRound = false;
    alert("Unfortunatley you lost against the computer!");
  }
};

againBtn.addEventListener("click", function () {
  userChoiceImg.classList.add("hidden");
  computerChoiceImg.classList.add("hidden");
  computerScore.textContent = 0;
  userScore.textContent = 0;
  scoreUsr = 0;
  scoreCmp = 0;
  outOfTheShell = true;
  newRound = true;
});

userRockBtn.addEventListener("click", function () {
  userChoiceImg.src = img[2];
});

userPaperBtn.addEventListener("click", function () {
  userChoiceImg.src = img[1];
});

userScissorsBtn.addEventListener("click", function () {
  userChoiceImg.src = img[0];
});

playBtn.addEventListener("click", function () {
  if (outOfTheShell) {
    computerChoiceImg.src = img[Math.trunc(Math.random() * 3)];
    userChoiceImg.classList.remove("hidden");
    computerChoiceImg.classList.remove("hidden");
    scoreKeeper();
    outOfTheShell = false;
  } else if (!outOfTheShell) {
    alert("You have to press the new round button!");
  }
});

const checkError = () => {
  if ((outOfTheShell = false)) {
    alert("You have to press the new round button!");
  }
};

newRoundBtn.addEventListener("click", function () {
  if (newRound) {
    userChoiceImg.classList.add("hidden");
    computerChoiceImg.classList.add("hidden");
    outOfTheShell = true;
  } else if (!newRound) {
    alert("You have to press the again button!");
  }
});
