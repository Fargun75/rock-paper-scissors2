function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return ("rock");
    } else if (num === 1) {
        return ("paper");
    } else return ("scissors");

}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors? - best of five attempts");
    choice = choice.toLowerCase();
    return choice;

}

function playGame() {


    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You loose - the computer chose paper and beats rock!");
            computerScore += 1;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win - the computer chose scissors and rock beats scissors!");
            humanScore += 1;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win - the computer chose rock and paper beats rock!");
            humanScore += 1;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You loose - the computer chose scissors and beats paper!");
            computerScore += 1;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You loose - the computer chose rock and beats scissors!");
            computerScore += 1;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win - the computer chose paper and scissors beats paper!");
            humanScore += 1;
        } else if (humanChoice === computerChoice) {
            console.log("It's a draw!");
        } else {
            console.log("I think there is a typo..?");
        }

        console.log("Your score is " + humanScore);
        console.log("The computer score is " + computerScore);
        console.log("");
    }

    for (let i=0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    
    function showScore() {
        if (humanScore > computerScore) {
            console.log("You win! You are best of five attempts!");
        } else if (computerScore > humanScore) {
            console.log("I'm sorry! You lost this competition!");
        } else {
            console.log("Looks like it's a draw after all");
        }
    }

    showScore();

}

playGame();