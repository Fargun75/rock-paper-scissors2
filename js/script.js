function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return ("rock");
    } else if (num === 1) {
        return ("paper");
    } else return ("scissors");

}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?");
    choice = choice.toLowerCase();
    return choice;

}



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You loose - paper beats rock!");
        computerScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win - rock beats scissors!");
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win - paper beats rock!");
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You loose - scissors beats paper!");
        computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You loose - rock beats scissors!");
        computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win - scissors beats paper!");
        humanScore += 1;
    } else if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    } else {
        console.log("I think there is a typo..?");
    }

    console.log("Your score is " + humanScore);
    console.log("The computer score is " + computerScore);
}


playRound(getHumanChoice(), getComputerChoice());

