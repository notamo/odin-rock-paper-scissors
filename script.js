// Write a logic to get a computer choice
// 1. Create a new function named getComputerChoice.
// 2. Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// console.log(getComputerChoice());

// Write a logic to get the human choice
// 1. Create a new function named getHumanChoice.
let getHumanChoice = function () {
    choice = prompt("Human, what is your choice?")
    return choice
}

// console.log(getHumanChoice());