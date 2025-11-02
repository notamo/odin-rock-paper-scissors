function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

let getHumanChoice = function () {
    const choice = prompt("Human, what is your choice?");
    return choice;
}

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
        console.log("It's a draw! No points were gained");
        return;
    }

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanWins("paper", "rock");
        } else {
            computerWins("scissors", "paper");
        }
        return;
    }

    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanWins("rock", "scissors");
        } else {
            computerWins("paper", "rock");
        }
        return;
    }
    
    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanWins("scissors", "paper");
        } else {
            computerWins("rock", "scissors");
        }
        return;
    }
    
    console.log("Invalid human choice! Round cancelled");
    return;
}

let playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    
    let humanWins    = (winningPick, losingPick) => {
        console.log(`You win! ${winningPick} beats ${losingPick}`);
        humanScore++;
    }
    let computerWins = (winningPick, losingPick) => {
        console.log(`You lose! ${winningPick} beats ${losingPick}`);
        computerScore++;
    };
    

    // let ctr = 0;
    // while (ctr < 5) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();    
    //     playRound(humanSelection, computerSelection);
    //     ctr++;
    // }

    // if (humanScore > computerScore) {
    //     console.log("You win!");
    // } else if (humanScore < computerScore) {
    //     console.log("Computer wins!");
    // } else {
    //     console.log("It's a draw!");
    // }
}

function init() {
    const select = document.querySelector("#selection");

    select.addEventListener("click", (event) => {
        let target = event.target;
        const result = document.querySelector("#result");
        const userSelection = document.createElement("p");

        switch (target.id) {
            case "rock":
                userSelection.textContent = "user selected rock";
                break;
            case "paper":
                userSelection.textContent = "user selected paper";
                break;
            case "scissors":
                userSelection.textContent = "user selected scissors";
                break;
        }
        result.appendChild(userSelection);
        
        playRound(target.id, getComputerChoice());
    });
}

init();
playGame();
