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
const chooseNumInput = document.querySelector("#choose-div input");
const playButton = document.querySelector("#choose-div button");
const hiddenDiv = document.querySelector("#hidden-div");
const hiddenFirstText = hiddenDiv.firstElementChild;
const hiddenSecondText = hiddenDiv.lastElementChild;

let endNum;
let chooseNum;

const onEndNumChange = (event) => {
  endNumInput.value = event.target.value.replace("-", "");
  endNum = parseInt(endNumInput.value);
}

const onChooseNumChange = (event) => {
  chooseNumInput.value = event.target.value.replace("-", "");
  chooseNum = parseInt(chooseNumInput.value);
}

const onPlayButtonClick = () => {
  const machineChooseNum = Math.ceil(Math.random() * endNum);
  hiddenDiv.classList.remove("hidden");

  hiddenFirstText.innerText = `당신의 선택: ${chooseNum}, 컴퓨터의 선택: ${machineChooseNum}.`;
  hiddenSecondText.innerText = (chooseNum === machineChooseNum) ? "✔승!😝" : "✔패😔";
}

endNumInput.addEventListener("change", onEndNumChange);
chooseNumInput.addEventListener("change", onChooseNumChange);
playButton.addEventListener("click", onPlayButtonClick);