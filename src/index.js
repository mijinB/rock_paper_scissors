const gamesButton = document.getElementById("games-button");
const rpsGameButton = document.getElementById("rps-game-button");
const randomGameButton = document.getElementById("random-game-button");
const rockPaperScissorsDiv = document.getElementById("rock-paper-scissors");
const randomNumberGameDiv = document.getElementById("random-number-game");

const onGameChoice = (event) => {
  const selectGame = event.target.innerText;
  const isRandomGame = (selectGame === "🎲");

  rpsGameButton.classList.toggle("selected-button", !isRandomGame);
  rockPaperScissorsDiv.classList.toggle("hidden", isRandomGame);
  
  randomGameButton.classList.toggle("selected-button", isRandomGame);
  randomNumberGameDiv.classList.toggle("hidden", !isRandomGame);
}

gamesButton.addEventListener("click", onGameChoice);

const icons = ["❓", "✊", "✋️", "✌"];

const gameCards = document.getElementById("game-cards")
const resultButton = document.querySelector("#result button");
const resultText = document.querySelector("#result p");

resultButton.innerText = icons[0];

const getRandomChoice = () => icons[Math.ceil(Math.random() * 3)];

const determineResult = (userChoice, machineChoice) => {
  if(userChoice === machineChoice) {
    return "✔무승부😉";
  } else if (
    (userChoice === "✊" && machineChoice === "✌") ||
    (userChoice === "✋️" && machineChoice === "✊") ||
    (userChoice === "✌" && machineChoice === "✋️")
  ) {
    return "✔승!😝";
  } else {
    return "✔패😔";
  }
}

const onGameStart = (event) => {
  const userChoice = event.target.innerText;
  const machineChoice = getRandomChoice();
  const result = determineResult(userChoice, machineChoice);

  resultButton.innerText = machineChoice;
  resultText.innerText = result;
}

gameCards.addEventListener("click", onGameStart);

const endNumInput = document.querySelector("#end-div input");
const choiceNumInput = document.querySelector("#choice-div input");
const playButton = document.querySelector("#choice-div button");
const hiddenDiv = document.querySelector("#hidden-div");
const hiddenResultInfo = hiddenDiv.firstElementChild;
const hiddenResult = hiddenDiv.lastElementChild;

let endNum;
let choiceNum;

const changeEndNum = (event) => {
  endNumInput.value = event.target.value.replace("-", "");
  endNum = parseInt(endNumInput.value);
}

const changeChoiceNum = (event) => {
  choiceNumInput.value = event.target.value.replace("-", "");
  choiceNum = parseInt(choiceNumInput.value);
}

const onGamePlay = () => {
  const machineChoiceNum = Math.ceil(Math.random() * endNum);
  hiddenDiv.classList.remove("hidden");

  hiddenResultInfo.innerText = `당신의 선택: ${choiceNum}, 컴퓨터의 선택: ${machineChoiceNum}.`;
  hiddenResult.innerText = (choiceNum === machineChoiceNum) ? "✔승!😝" : "✔패😔";
}

endNumInput.addEventListener("change", changeEndNum);
choiceNumInput.addEventListener("change", changeChoiceNum);
playButton.addEventListener("click", onGamePlay);