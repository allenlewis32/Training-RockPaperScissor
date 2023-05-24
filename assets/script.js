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

async function play() {
    if(gameOver) newGame();

    score++;
    
    // choice: 0 - rock; 1 - paper; 2 - scissor
    let playerChoice = document.playerForm.choice.value;
    let computerChoice = Math.floor(Math.random() * 3);

    let image = computerChoice == 0?"rock":computerChoice==1?"paper":"scissor";
    
    // shuffle animation
    let steps = 0, totalSteps = 10 + computerChoice, slide = 0;
    while(steps++ < totalSteps) {
        let image = slide == 0?"rock":slide==1?"paper":"scissor";
        slide = (slide + 1) % 3;
        document.getElementById('computerChoice').innerHTML = `<img src="assets/img/${image}.png">`;
        await new Promise(resolve => setTimeout(resolve, 100));
    }

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
    document.getElementById('score').innerHTML = "Score: " + score;
    document.getElementById('playerHighScore').innerHTML = "Player: " + playerHighScore;
    document.getElementById('computerHighScore').innerHTML = "Computer: " + computerHighScore;

    if(gameOver) {
        if(won === "player") {
            alert("You won");
        } else {
            alert("You lost");
        }
    }
}