function getComputerChoice() {
    let array = ['ROCK', 'PAPER', 'SCISSORS'];
    let randomNumber = Math.floor(Math.random()*array.length);
    return array[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection == 'ROCK') {
        if (computerSelection == 'ROCK') {
            return "It's a tie!";
        } else if (computerSelection == 'SCISSORS') {
            return "You win! Rock beats Scissors";
        } else {
            return "You lose! Paper beats Rock";
        }
    } else if (playerSelection == 'PAPER') {
        if (computerSelection == 'ROCK') {
            return "You win! Paper beats Rock";
        } else if (computerSelection == 'SCISSORS') {
            return "You lose! Scissors beats Paper";
        } else {
            return "It's a tie!";
        }
    } else if (playerSelection == 'SCISSORS') {
        if (computerSelection == 'ROCK') {
            return "You lose! Rock beats Scissors";
        } else if (computerSelection == 'SCISSORS') {
            return "It's a tie!";
        } else {
            return "You win! Scissors beats Paper";
        } 
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));