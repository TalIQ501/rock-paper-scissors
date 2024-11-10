function getComputerChoice() {
    var choice = Math.floor(Math.random() * 3);
    if (choice === 1) { return 'rock' }
    else if (choice === 2) { return 'paper' }
    else { return 'scissors' }
}

function main() {
    let run = true
    playerScore = 0;
    compScore = 0;
    while (run) {
        let compChoice = getComputerChoice();
        let playerChoice = prompt('Rock, Paper, or Scissors?:');
        console.log(`Player played ${playerChoice}, Computer played ${compChoice}`)
        if (playerChoice === 'quit') { console.log('Game quit'); run = false}
        else if (compChoice === playerChoice) { return 'draw' }
        else if (
            compChoice === 'rock' && playerChoice == 'paper' ||
            compChoice === 'paper' && playerChoice == 'scissors' ||
            compChoice === 'scissors' && playerChoice == 'rock'
        ) {
            console.log('Player Wins');
            playerScore += 1

        } else {
            console.log('Computer Wins');
            compScore += 1
        }
        console.log(`Current Score is Player: ${playerScore} - Computer: ${compScore}`);
    }
}

main();