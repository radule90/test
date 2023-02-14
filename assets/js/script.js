/**
 * Declare variables for DOM elements
 */

const buttons = document.querySelectorAll("[data-selection]");
const userChoiceDisplay = document.getElementById("user-choice-display");
const computerChoiceDisplay = document.getElementById("computer-choice-display");
const resultDisplay = document.getElementById("result-display");
const userScore = document.getElementById("user-score");
const draw = document.getElementById("draw");
const computerScore = document.getElementById("computer-score");

const winMessage = document.getElementById("win-message");
const lostMessage = document.getElementById("lost-message");


let userChoice;
let computerChoiceName;
let selection;

let userWins = 0;
let computerWins = 0;
let drawGames = 0;

/**
 * Add event listener to all the buttons
 */

for (let button of buttons) {
        button.addEventListener("click", function() {
        userChoice = this.getAttribute("data-selection");
        userChoiceDisplay.innerHTML = userChoice;
        randomComputerChoice();
        selectWinner();
        incrementScore();
        roundWin();
    });
}


/**
 * Generates computer random choice and associate the name to number
 */

function randomComputerChoice() {
    const randomNumber = Math.floor(Math.random() * buttons.length + 1);
    switch(randomNumber) {
        case 1:
            computerChoiceName = "Rock";
            break;
        case 2:
            computerChoiceName = "Paper";
            break;
        case 3:
            computerChoiceName = "Scissors";
            break;
    }

    computerChoiceDisplay.innerHTML = computerChoiceName;
}


/**
 * Compare results and selects winner
 */

function selectWinner() {
    if (userChoice === computerChoiceName) {
        selection = "It's a draw!";
    } else if (userChoice === "Rock" && computerChoiceName === "Paper") {
        selection = "You lost!";
    } else if (userChoice === "Paper" && computerChoiceName === "Rock") {
        selection = "You won!!!";
    } else if (userChoice === "Paper" && computerChoiceName === "Scissors") {
        selection = "You lost!";
    } else if (userChoice === "Scissors" && computerChoiceName === "Paper") {
        selection = "You won!!!";
    } else if (userChoice === "Scissors" && computerChoiceName === "Rock") {
        selection = "You lost!";
    } else if (userChoice === "Rock" && computerChoiceName === "Scissors") {
        selection = "You won!!!";
      }

    resultDisplay.innerHTML = selection;
}


/**
 * Function counts and increment score
 */

function incrementScore() {
    if (selection === "You won!!!") {
        ++userWins;
    } else if (selection === "You lost!") {
        ++computerWins;
    } else {
        ++drawGames;
    }

    userScore.innerHTML = userWins;
    computerScore.innerHTML = computerWins;
    draw.innerHTML = drawGames;
}


/**
 * Check if someone has 10 wins,
 * display win/lost message,
 * calls reset function
 */

function roundWin() {
    if (userWins === 10) {
        winMessage.style.display = "block";
        resetGame();
    } else if (computerWins === 10) {
        lostMessage.style.display = "block";
        resetGame();
    }
}


/**
 * Add event listener to message buttons
 */

window.onclick = function(event) {
    if (event.target.id === "close-win") {
        winMessage.style.display = "none";
    } else if (event.target.id === "close-lost") {
        lostMessage.style.display = "none";
    }
}


/**
 * Resets all values to 0 and empty strings
 */

function resetGame() {
    userChoice.innerHTML = "";
    computerChoiceName.innerHTML = "";
    resultDisplay.innerHTML = "";
    userScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    draw.innerHTML = 0;
    userWins = 0;
    drawGames = 0;
    computerWins = 0;
}