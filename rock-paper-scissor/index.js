const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("player");
const pcDisplay = document.getElementById("pc");
const resultDisplay = document.getElementById("result");


function playRound (playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
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

function game (pChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = playRound(pChoice, computerChoice);

    playerDisplay.textContent = `player: ${pChoice}`;
    pcDisplay.textContent = `pc: ${computerChoice}`;
    resultDisplay.textContent = result;
}