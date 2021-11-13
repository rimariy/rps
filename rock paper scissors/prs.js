
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > h1");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const ccho_div=document.getElementById("ccho");
const hcho_div=document.getElementById("hcho");

//كذا نخلي الكمبيوتر يختار 
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  ccho_div.src=choices[randomNumber]+".jfif";
  return choices[randomNumber];
}

function convertToWord(letter) {
  switch (letter) {
    case "r":
      return "Rock";
    case "p":
        return "Paper";
    case "s":
        return "Scissors";
  }
}

function win(userChoice, computerChoice) {
  const smallUserWord = "you".fontsize(3).sub();
  const smallCompWord = "not you".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} يفوز على  ${convertToWord(computerChoice)}${smallCompWord} 👍مبروك فزت`;
 
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "you".fontsize(3).sub();
  const smallCompWord = "not you".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} يخسر قدام  ${convertToWord(computerChoice)}${smallCompWord}  خسرت 😎`;

}

function draw(userChoice, computerChoice) {
  const smallUserWord = "you".fontsize(3).sub();
  const smallCompWord = "not you".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} و  ${convertToWord(computerChoice)}${smallCompWord} تعادل 🤷‍♀️`;
}

function game(userChoice) {

    const computerChoice = getComputerChoice();
    hcho_div.src=userChoice+".jfif";

    switch (userChoice + computerChoice) {
      case "rs":
      case "pr":
      case "sp":
        win(userChoice, computerChoice);
        break;
      case "sr":
      case "rp":
      case "ps":
        lose(userChoice, computerChoice);
        break;
      case "rr":
      case "pp":
      case "ss":
        draw(userChoice, computerChoice);
        break;
    }

}


function main() {
  rock_div.addEventListener('click', () => game("r") );
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
}

main();
