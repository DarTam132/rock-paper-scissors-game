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
const img = [
  "./img/game-element-1.PNG",
  "./img/game-element-2.PNG",
  "./img/game-element-3.PNG",
];
const options = ["scissors", "paper", "rock"];

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

const scoreKeeper = () => {
  if (
    (userChoiceImg.textContent === "rock" &&
      computerChoiceImg.textContent === "scissors") ||
    (userChoiceImg.textContent === "paper" &&
      computerChoiceImg.textContent === "rock") ||
    (userChoiceImg.textContent === "scissors" &&
      computerChoiceImg.textContent === "paper")
  ) {
    scoreUsr++;
    userScore.textContent = scoreUsr;
    console.log(userChoiceImg.textContent, "usr choice");
  } else if (
    (computerChoiceImg.textContent === "rock" &&
      userChoiceImg.textContent === "scissors") ||
    (computerChoiceImg.textContent === "paper" &&
      userChoiceImg.textContent === "rock") ||
    (computerChoiceImg.textContent === "scissors" &&
      userChoiceImg.textContent === "paper")
  ) {
    scoreCmp++;
    computerScore.textContent = scoreCmp;
    console.log(computerChoiceImg.textContent, "cmp choice");
  } else {
    ("ba esti nebun");
  }

  if (scoreUsr === 5) {
    newRound = false;
    alert("Congratulations, you win over the computer!");
  } else if (scoreCmp === 5) {
    newRound = false;
    alert("Unfortunatley you lost against the computer!");
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
  userChoiceImg.textContent = "rock";
  console.log(userChoiceImg.src, userChoiceImg.textContent);
});

userPaperBtn.addEventListener("click", function () {
  userChoiceImg.src = img[1];
  userChoiceImg.textContent = "paper";
  console.log(userChoiceImg.src, userChoiceImg.textContent);
});

userScissorsBtn.addEventListener("click", function () {
  userChoiceImg.src = img[0];
  userChoiceImg.textContent = "scissors";
  console.log(userChoiceImg.src, userChoiceImg.textContent);
});

let random = () => Math.floor(Math.random() * 3);
playBtn.addEventListener("click", function () {
  if (outOfTheShell) {
    let randomNumber = random();
    computerChoiceImg.src = img[randomNumber];
    computerChoiceImg.textContent = options[randomNumber];
    userChoiceImg.classList.remove("hidden");
    computerChoiceImg.classList.remove("hidden");
    scoreKeeper();
    outOfTheShell = false;
    console.log(`cpuTxt: ${computerChoiceImg.textContent} ,cpuSrc: ${computerChoiceImg.src} 
      ,imgR: ${img[randomNumber]}
      , OpR ${options[randomNumber]}
    `);
  } else if (!outOfTheShell) {
    alert("You have to press the new round button!");
  }
});

newRoundBtn.addEventListener("click", function () {
  if (newRound) {
    userChoiceImg.classList.add("hidden");
    computerChoiceImg.classList.add("hidden");
    outOfTheShell = true;
  } else if (!newRound) {
    alert("You have to press the again button!");
  }
});
