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
// 2. Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
//    You do not need to handle reprompting if the user enters an invalid input, as that would require things we will teach later. 
//    For now, just assume the user will always enter a valid choice.
let getHumanChoice = function () {
    choice = prompt("Human, what is your choice?");
    return choice;
}

// console.log(getHumanChoice());

// Declare the players score variables
// 1. Create two new variables named humanScore and computerScore in the global scope.
// 2. Initialize those variables with the value of 0.
let humanScore = 0;
let computerScore = 0;
