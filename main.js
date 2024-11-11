function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice) {
    const compChoice = getComputerChoice();
    console.log(`Player played ${playerChoice}, Computer played ${compChoice}`);

    if (compChoice === playerChoice) {
        console.log('It\'s a draw!');
        return 'draw';
    } else if (
        (compChoice === 'rock' && playerChoice === 'paper') ||
        (compChoice === 'paper' && playerChoice === 'scissors') ||
        (compChoice === 'scissors' && playerChoice === 'rock')
    ) {
        console.log('Player Wins');
        return ['player', compChoice];
    } else {
        console.log('Computer Wins');
        return ['computer', compChoice];
    }
}

function main() {
    let playerScore = 0;
    let compScore = 0;

    const btnRock = document.getElementById('btn-rock');
    const btnPaper = document.getElementById('btn-paper');
    const btnScissors = document.getElementById('btn-scissors');
    const btnReset = document.getElementById('btn-reset')

    const playerScoreDisplay = document.getElementById('player-score');
    const compScoreDisplay = document.getElementById('comp-score');

    const playerPlayed = document.getElementById('player-played');
    const compPlayed = document.getElementById('comp-played');

    const handlePlayerChoice = (playerChoice) => {
        const result = playRound(playerChoice);
        if (result[0] === 'player') {
            playerScore++;
        } else if (result[0] === 'computer') {
            compScore++;
        }

        const display = () => {
            playerScoreDisplay.textContent = playerScore;
            compScoreDisplay.textContent = compScore;

            playerPlayed.textContent = playerChoice;
            compPlayed.textContent = result[1];
        }

        display();

        console.log(`Current Score - Player: ${playerScore} - Computer: ${compScore}`);
    };  

    btnRock.addEventListener("click", () => handlePlayerChoice('rock'));
    btnPaper.addEventListener("click", () => handlePlayerChoice('paper'));
    btnScissors.addEventListener("click", () => handlePlayerChoice('scissors'));
    btnReset.addEventListener("click", () => {
        playerScore = 0;
        compScore = 0;
        display();
    });
}

main();