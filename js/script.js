function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return ("rock");
    } else if (num === 1) {
        return ("paper");
    } else return ("scissors");

}





/*function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors? - best of five attempts");
    choice = choice.toLowerCase();
    return choice;

}*/

function playGame() {

    let rock = document.querySelector('#rock');
    rock.addEventListener('click', function () {
        let choice = "rock";
        playRound(choice, getComputerChoice());

    });

    let paper = document.querySelector('#paper');
    paper.addEventListener('click', function (e) {
        let choice = "paper";
        playRound(choice, getComputerChoice());
    });

    let scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', function (e) {
        let choice = "scissors";
        playRound(choice, getComputerChoice());
    });

    let result = document.querySelector('#result');
    let score = document.querySelector('#score');



    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
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
            result.textContent = ("I think there is a typo..?");
        }

        score.textContent = `
        Your score is ${humanScore}
        The computer score is ${computerScore}
        `
    }

    /*for (let i = 0; i < 5; i++) {}*/
    //playRound(choise, getComputerChoice());





    /*function showScore() {
        if (humanScore > computerScore) {
            console.log("You win! You are best of five attempts!");
        } else if (computerScore > humanScore) {
            console.log("I'm sorry! You lost this competition!");
        } else {
            console.log("Looks like it's a draw after all");
        }
    }

    showScore();*/

}

playGame();