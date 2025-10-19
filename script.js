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

// Write the logic to play a single round
// 1. Create a new function named playRound.
// 2. Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to 
//    take the human and computer choices as arguments.
// 3. Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// 4. Write the code for your playRound function to console.log a string value representing the round winner,
//    such as: “You lose! Paper beats Rock”.
// 5. Increment the humanScore or computerScore variable based on the round winner.
let humanWins    = (winningPick, losingPick) => {
    console.log(`You win! ${winningPick} beats ${losingPick}`);
    humanScore++;
};
let computerWins = (winningPick, losingPick) => {
    console.log(`You lose! ${winningPick} beats ${losingPick}`);
    computerScore++;
};

let playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a draw! No points were gained")
        return
    }

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanWins("paper", "rock");
        } else {
            computerWins("scissors", "paper");
        }
        return
    }

    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanWins("rock", "scissors");
        } else {
            computerWins("paper", "rock");
        }
        return
    }
    
    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanWins("scissors", "paper");
        } else {
            computerWins("rock", "scissors");
        }
        return
    }
    
    console.log("Invalid human choice! Round cancelled")
    return
}

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
