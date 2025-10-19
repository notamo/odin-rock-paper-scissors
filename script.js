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

console.log(getComputerChoice());
