const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("player");
const pcDisplay = document.getElementById("pc");
const resultDisplay = document.getElementById("result");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("pcScore");
const winning = document.getElementById("winning");
let pScore = 0;
let pcScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "it's a tie!"
    } else {
        switch (computerSelection) {
            case 'rock':
                return (playerSelection === 'paper') ? "YOU WIN!" : "YOU LOSE!";
            case 'paper':
                return (playerSelection === 'scissors') ? "YOU WIN!" : "YOU LOSE!";
            case 'scissors':
                return (playerSelection === 'rock') ? "YOU WIN!" : "YOU LOSE!";
        }
    }
}

function game(pChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = playRound(pChoice, computerChoice);

    playerDisplay.textContent = `player: ${pChoice}`;
    pcDisplay.textContent = `pc: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            pScore++;
            playerScoreDisplay.textContent = pScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            pcScore++;
            computerScoreDisplay.textContent = pcScore;
            break;
        default :
            resultDisplay.classList.remove("greenText", "redText");
    }

    (pScore > pcScore) ? winning.textContent = "Player is winning" : winning.textContent = "Computer is winning";
}