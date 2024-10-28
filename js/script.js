function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return ("rock");
    } else if (num === 1) {
        return ("paper");
    } else return ("scissors");
}
let result = document.querySelector('#result');
let score = document.querySelector('#score');
let winner = document.querySelector('#winner');


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanScore < 5 && computerScore < 5) {

        if (humanChoice === "rock" && computerChoice === "paper") {
            result.textContent = ("You loose - the computer chose paper and beats rock!");
            computerScore += 1;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            result.textContent = ("You win - the computer chose scissors and rock beats scissors!");
            humanScore += 1;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            result.textContent = ("You win - the computer chose rock and paper beats rock!");
            humanScore += 1;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            result.textContent = ("You loose - the computer chose scissors and beats paper!");
            computerScore += 1;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            result.textContent = ("You loose - the computer chose rock and beats scissors!");
            computerScore += 1;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            result.textContent = ("You win - the computer chose paper and scissors beats paper!");
            humanScore += 1;
        } else if (humanChoice === computerChoice) {
            result.textContent = ("It's a draw!");
        } else {
            result.textContent = ("I think you missed...");
        }

        score.textContent = (`Your score is ${humanScore}, ` + ` The computer score is ${computerScore}`);

        if (humanScore === 5 && computerScore < 5) {
            winner.textContent = `You win!!!`;

        } else if (computerScore === 5 && humanScore < 5) {
            winner.textContent = `You lost - the computer is the winner`

        }
    } else return;
}

let button = document.querySelector('.buttons');

button.addEventListener('click', function (e) {
    let target = e.target;
    let choice;
    switch (target.id) {
        case ('rock'):
            choice = "rock"
            break;

        case ('paper'):
            choice = "paper"
            break;

        case ('scissors'):
            choice = "scissors"
            break;
    }
    playRound(choice, getComputerChoice());
});