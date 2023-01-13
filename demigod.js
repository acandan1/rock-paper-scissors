

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
            updateScore('W');
            return "You win! Rock beats Scissors";
        } else {
            updateScore('L');
            return "You lose! Paper beats Rock";
        }
    } else if (playerSelection == 'PAPER') {
        if (computerSelection == 'ROCK') {
            updateScore('W');
            return "You win! Paper beats Rock";
        } else if (computerSelection == 'SCISSORS') {
            updateScore('L');
            return "You lose! Scissors beats Paper";
        } else {
            return "It's a tie!";
        }
    } else if (playerSelection == 'SCISSORS') {
        if (computerSelection == 'ROCK') {
            updateScore('L');
            return "You lose! Rock beats Scissors";
        } else if (computerSelection == 'SCISSORS') {
            return "It's a tie!";
        } else {
            updateScore('W');
            return "You win! Scissors beats Paper";
        } 
    }
}

let playerScore = 0;
let computerScore = 0;
//Helper function that keeps the score
function updateScore(winner) {
    if (winner === 'W') {
        playerScore++;
    } else if (winner === 'L') {
        computerScore++;
    }
    return;
}

//Helper function that displays the score as a string
function displayScore() {
    let currentScore = 'Player Score:' + playerScore + '      Computer Score: ' + computerScore;
    if (playerScore === 5) {
        return "You've won 5 to " + computerScore;
    } else if (computerScore === 5) {
        return "You've lost 5 to " + playerScore;
    }
    return currentScore;
}

//const playerSelection = "rock";
const computerSelection = getComputerChoice();

const div = document.createElement('div');
div.classList.add('buttons');
div.textContent = 'Choose one!'

const rock = document.createElement('button');
rock.textContent = 'Rock';
const paper = document.createElement('button');
paper.textContent = 'Paper';
const scissors = document.createElement('button');
scissors.textContent = 'Scissors';

const roundResults = document.createElement('div');
roundResults.classList.add('round-results');
roundResults.textContent = "";

const results = document.createElement('div');
results.classList.add('results');
results.textContent = displayScore();


rock.addEventListener('click', () => {
    let computerChoseThis = getComputerChoice();
    playRound('rock', computerChoseThis);
    roundResults.textContent = playRound('rock', computerChoseThis);
    results.textContent = displayScore();
});
paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));

div.appendChild(rock);
div.appendChild(paper);
div.appendChild(scissors);
document.body.appendChild(div);
document.body.appendChild(roundResults);
document.body.appendChild(results);
