var getUserChoice = (userInput) => { 
    userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }
    else {
        console.log('pick rock, paper, or scissors');
    }
}; 

var getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
switch (randomNumber) {
    case 0: 
    return 'rock';
    case 1: 
    return 'paper';
    case 2:
        return 'scissors';
}
};
var determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game was a tie.';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Sorry, computer won!';
        } else {
                return 'Congratulations, you won!';
            }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Sorry, computer won!';
        } else {
            return "Congratulations, you won!";
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return "Sorry, computer won!";
        } else {
            return "congratulations, you won!";
        }
    }
};

const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
console.log('You played ' + userChoice);
console.log('You played ' + computerChoice);

console.log(determineWinner(userChoice, computerChoice));
};

playGame();
