// 1. Deposti some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYMBOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2

}






const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a Deposit Amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid Deposit Amount, try again.");
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the Number of Lines to Bet on (1 - 3) ");
    const numberOfLines = parseInt(lines);
    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines entered");
    } else {
      return numberOfLines;
    }
  }
};


const getBet = (balance, lines) => {
    while(true){
        const bet = prompt("Enter the Bet per Line: ");
        const numberOfBet = parseInt(bet);

        if(isNaN(numberOfBet) || numberOfBet <= 0 || numberOfBet > balance / lines)
        console.log("Invalid Bet Amount, Try Again");
        else {
            return numberOfBet;
        }

    }

}


const spin = () => {
    const symbols = [];
    for(const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        console.log(symbol,count)

    }
}


let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance,numberOfLines);
