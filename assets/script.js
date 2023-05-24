let score;

let playerHighScore = 0;
let computerHighScore = 0;

let gameOver = true;

function newGame() {
    playerScore = 0;
    computerScore = 0;
    score = 0;
    currentPlayer = Math.random() < 0.5;
    gameOver = false;
}

function play() {
    if(gameOver) newGame();

    score++;
    
    // choice: 0 - rock; 1 - paper; 2 - scissor
    let playerChoice = document.playerForm.choice.value;
    let computerChoice = Math.floor(Math.random() * 3);

    document.getElementById('computer').innerHTML = computerChoice === 0?"Rock":computerChoice===1?"Paper":"Scissor";
    let won;
    
    if((computerChoice - playerChoice + 3) % 3 === 1) { // player has lost
        gameOver = true;
        if(computerHighScore < score) {
            computerHighScore = score;
        }
        won = "computer";
    } else if((playerChoice - computerChoice + 3) % 3 === 1) { // computer has lost
        gameOver = true;
        if(playerHighScore < score) {
            playerHighScore = score;
        }
        won = "player";
    } else {
    }
    document.getElementById('score').innerHTML = score;
    document.getElementById('playerHighScore').innerHTML = playerHighScore;
    document.getElementById('computerHighScore').innerHTML = computerHighScore;

    if(gameOver) {
        if(won === "player") {
            alert("You have won");
        } else {
            alert("You have lost");
        }
    }
}