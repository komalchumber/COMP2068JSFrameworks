const prompt = require('prompt');

prompt.start();

const schema = {
  properties: {
    userSelection: {
      pattern: /^(rock|paper|scissors)$/i,
      message: 'Please enter ROCK, PAPER, or SCISSORS',
      required: true
    }
  }
};

let userScore = 0;
let computerScore = 0;

function Round(round) {
  console.log(`\nRound ${round + 1}`);
  prompt.get(schema, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }

    const userSelection = result.userSelection.toUpperCase();
    const computerSelection = getComputerSelection();
    console.log(`User selected: ${userSelection}`);
    console.log(`Computer selected: ${computerSelection}`);

    const roundResult = finalResult(userSelection, computerSelection);
    if (roundResult === 'User Wins') {
      userScore++;
    } else if (roundResult === 'Computer Wins') {
      computerScore++;
    }

    if (round < 3) {
      Round(round + 1);
    } else {
      console.log(`\nFinal Scores:`);
      console.log(`User: ${userScore}`);
      console.log(`Computer: ${computerScore}`);

      if (userScore > computerScore) {
        console.log('You win this Game!');
      } else if (userScore < computerScore) {
        console.log('oops, Computer wins the game this time!');
      } else {
        console.log("Overall, It's a tie!");
      }
    }
  });
}

function getComputerSelection() {
  const randomNum = Math.random();
  if (randomNum <= 0.34) {
    return 'PAPER';
  } else if (randomNum <= 0.67) {
    return 'SCISSORS';
  } else {
    return 'ROCK';
  }
}

function finalResult(userSelection, computerSelection) {
  switch (true) {
    case userSelection === computerSelection:
      console.log("It's a tie");
      return "It's a tie";
    case (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
         (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
         (userSelection === 'SCISSORS' && computerSelection === 'PAPER'):
      console.log('User Wins');
      return 'User Wins';
    default:
      console.log('Computer Wins');
      return 'Computer Wins';
  }
}

// Start the first round
Round(0);
