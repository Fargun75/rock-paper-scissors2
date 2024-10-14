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

