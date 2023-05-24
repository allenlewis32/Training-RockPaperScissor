let computerScore, playerScore;

let playerNumWins = 0;
let computerNumWins = 0;

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

    // shuffle animation
    let steps = 0, totalSteps = 4 + computerChoice, slide = 0;
    while(steps++ < totalSteps) {
        let image = slide == 0?"rock":slide==1?"paper":"scissor";
        slide = (slide + 1) % 3;
        document.getElementById('computerChoice').innerHTML = `<img src="assets/img/${image}.png">`;
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    if((computerChoice - playerChoice + 3) % 3 === 1) { // player has lost
        computerScore++;
    } else if((playerChoice - computerChoice + 3) % 3 === 1) { // computer has lost
        playerScore++;
    }
    document.getElementById('playerScore').innerHTML = "Player Score: " + playerScore;
    document.getElementById('computerScore').innerHTML = "Computer Score: " + computerScore;
    
    if(computerScore === 10 || playerScore === 10) {
        gameOver = true;
        if(playerScore === 10) {
            playerNumWins++;
            alert("You won");
        } else {
            computerNumWins++;
            alert("You lost");
        }
    }
    document.getElementById('playerNumWins').innerHTML = "Number of wins(player): " + playerNumWins;
    document.getElementById('computerNumWins').innerHTML = "Number of wins(computer): " + computerNumWins;
}