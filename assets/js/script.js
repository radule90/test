const yourScore = document.getElementById("you-score");
const drawScore = document.getElementById("draw-score");
const computerScore = document.getElementById("computer-score");
const buttons = document.querySelectorAll("[data-selection]");
const yourChoice = document.getElementById("your-choice-display");
const computerChoice = document.getElementById("computer-choice-display");
const result = document.getElementById("result-display");
let userChoice;
let computerChoiceName;
let decision;
let computerWins = 0;
let userWins = 0;
let drawGames = 0;
let winMessage = document.getElementById("win-message");
let loseMessage = document.getElementById("lose-message");
let closeMessage = document.getElementsByClassName("close");



/**
 * Add event listener to all the buttons and run game compare function
 */

for (let button of buttons) {
    button.addEventListener("click", function() {
        userChoice = this.getAttribute("data-selection");
        yourChoice.innerHTML = userChoice;    randomComputerChoice();
        chooseWinner();
        incrementScore();
        setTimeout(roundWin(), 2000);
    });
    
}

/**
 * Computer random choice function
 */
function randomComputerChoice() {
    const randomNumber = Math.floor(Math.random() * buttons.length + 1);
 
 switch(randomNumber) {
     case 1:
         computerChoiceName = "rock";
         break;
     case 2:
         computerChoiceName = "paper";
         break;
     case 3:
         computerChoiceName = "scissors";
         break;
 }
     computerChoice.innerHTML = computerChoiceName;
 }


/**
 * Function to compare results
 */
function chooseWinner() {
if(userChoice === computerChoiceName) {
    decision = "Draw";
} else if(userChoice === "rock" && computerChoiceName === "paper") {
    decision = 'you lose';
} else if (userChoice === 'paper' && computerChoiceName === "rock") {
    decision = 'you win';
} else if (userChoice === 'paper' && computerChoiceName === "scissors") {
    decision = 'you lose';
} else if (userChoice === 'scissors' && computerChoiceName === 'paper') {
    decision = 'you win';
} else if (userChoice === 'scissors' && computerChoiceName === "rock") {
    decision = 'you lose';
} else if (userChoice === 'rock' && computerChoiceName === "scissors") {
    decision = 'you win';
  }
result.innerHTML = decision;
}


/**
 * Function counts and increment score
 */
function incrementScore() {
    if (decision === 'you win') {
        ++userWins; 
    } else if (decision === 'you lose') {
        ++computerWins;
    } else {
        ++drawGames;
    }
    yourScore.innerHTML = userWins;
    drawScore.innerHTML = drawGames;
    computerScore.innerHTML = computerWins;
}



function roundWin() {
     if (userWins === 10) {
        winMessage.style.display = "block";
       
        resetGame();
    } else if (computerWins === 10) {
        loseMessage.style.display = "block";
        resetGame();
    } 
    
}

window.onclick = function(event) {
    if (event.target.id === 'close') {
        winMessage.style.display  = "none";
    } else if (event.target.id === 'closeLos') {
        loseMessage.style.display = "none";
    }
}



function resetGame(){
    yourScore.innerHTML = 0;
    drawScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    userWins = 0;
    computerWins = 0;
    drawGames = 0;
    yourChoice.innerHTML = "";
    computerChoice.innerHTML = "";
    result.innerHTML = "";
}