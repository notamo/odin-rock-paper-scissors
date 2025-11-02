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

let addLogEntry = (text) => {
    const result = document.querySelector("#result");
    const logEntry = document.createElement("p");
    
    logEntry.textContent = text;
    result.appendChild(logEntry);
}

let updateScoreUi = (computerScore = 0, humanScore = 0) => {
    const scorePara = document.querySelector("#score");
    scorePara.textContent = `Computer score: ${computerScore}, Human score: ${humanScore}`
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const result = document.querySelector("#result");
    const scorePara = document.createElement("p");
    scorePara.id = "score";
    scorePara.textContent = `Computer score: ${computerScore}, Human score: ${humanScore}`;
    result.append(scorePara);
    
    let humanWins    = (winningPick, losingPick) => {
        addLogEntry(`You win! ${winningPick} beats ${losingPick}`);
        humanScore++;
    }
    let computerWins = (winningPick, losingPick) => {
        addLogEntry(`You lose! ${winningPick} beats ${losingPick}`);
        computerScore++;
    };

    let playRound = (humanChoice, computerChoice) => {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            addLogEntry("It's a draw! No points were gained");
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
        
        addLogEntry("Invalid human choice! Round cancelled");
        return;
    }
    
    const select = document.querySelector("#selection");
    select.addEventListener("click", (event) => {
        const humanChoice = event.target.id;

        switch (humanChoice) {
            case "rock":
                addLogEntry("user selected rock");
                break;
            case "paper":
                addLogEntry("user selected paper");
                break;
            case "scissors":
                addLogEntry("user selected scissors");
                break;
        }
        
        playRound(humanChoice, getComputerChoice());
        updateScoreUi(computerScore, humanScore);

        if (humanScore >= 5) {
            console.log("You win!");
            return;
        }

        if (computerScore >= 5) {
            console.log("Computer wins!");
            return;
        }

    });
}

playGame();
