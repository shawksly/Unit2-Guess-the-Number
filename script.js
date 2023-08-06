/* Within the function called "randomNumber", it allows for a two parameters to be passed. One will be the value that is taken from the input from the HTML document. The other is a random number that has been generated.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: computersNumber
*/

// adds variable for counting how many times function is run/how many guesses are made.
let functionCounter = 0;

function randomNumber(userGuess, computersNumber) {
  // YOUR CODE BELOW

  // adds 1 each time the function is run
  functionCounter++;

  // Displays out of bounds if input number is not between 1 and 100
  if (userGuess < 1 || userGuess > 100) {
    return `Please enter a number between 1 and 100! | Number of guesses: ${functionCounter}!`;

    // displays winning message if input and CPU match
  } else if (userGuess == computersNumber) {
    return `The number was ${computersNumber}! | Number of guesses: ${functionCounter}!`;

    // displays request for higher number if the input is lower than CPU
  } else if (userGuess < computersNumber) {
    return `Try higher! | Number of guesses: ${functionCounter}!`;

    // displays request for lower number if the input is lower than CPU
  } else if (userGuess > computersNumber) {
    return `Try lower! | Number of guesses: ${functionCounter}!`;
  }

  // YOUR CODE ABOVE
}

//* Have the Computer Guess your Number ---------------------------------------------
/* 
    Build out the functionality for the computer to guess and evaluate your random number.

    - There are two static functions framed. DO NOT alter the name or parameters of these functions:
        - startCompGuess(num)
        - compGuess(reply)

    *hint:
        - don't forget that variables are a way for us to store information and update later.
        - What is the "current number"? The lowest number? Highest?

    You are not limited to just these functions. Feel free to create a new function that may be called to help manage the flow of your code.
*/

/* 
// testing for understanding
let test = Math.random();
console.log('rand:', test);
console.log('math:', 75 - 25 + 1);
test = test * (75 - 25 + 1);
console.log('initial math:', test);
test = test + 25;
console.log('plus min:', test);
test = Math.floor(test);
console.log('final:', test);
 */

// global current number variable
let currentNumber;
let lowest;
let highest;
let guesses;


/* sets currentNumber to a random number between 1 and 100, and returns this variable */
let createGuess = () => {

  // takes lowest and highest values and creates a random integer between them, inclusive of those values
  currentNumber = Math.floor(Math.random() * (highest - lowest + 1) + lowest);

  /************************************************************************
    Alternate, more efficient, guessing method, suggested by instructions
  ************************************************************************/
  // currentNumber = Math.floor(((highest - lowest) / 2) + lowest);

  //increments amount of guesses;
  guesses++;

  // used for testing
  // console.log('current:', currentNumber);
  // console.log('lowest:', lowest);
  // console.log('highest:', highest);

  return currentNumber;
};


/* resets and makes new game */
function startCompGuess(num) {
  // This should return a string that denotes the first guessed number
  // YOUR CODE ...
  
  //resets high and low bounds
  lowest = 1;
  highest = 100;
  guesses = 0;

  // gets new guess
  createGuess();

  // displays CPU guess
  return `Is your number ${currentNumber}? | Guesses: ${guesses}`;
}


/* takes user input and creates new guesses */
function compGuess(reply) {
  /* 
    The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating the logic and response.
    This should return a string indicating the computers response.
  */

  // if user tries a button that pushes the numbers out of bounds, this catches it.
  if (
    (reply === 'higher' && currentNumber === highest) ||
    (reply === 'lower' && currentNumber === lowest))
    {
    return `No changing your number! Start over!`;
  } else {

    // switch statement pulls in reply variable
    switch (reply) {

      case "lower":

        //sets upper bounds, minus 1 so they it won't guess the same number again.
        highest = currentNumber - 1;

        // outputs if lower
        return `Your number is lower? Is it ${createGuess()}? | Guesses: ${guesses}`;

      case "higher":

        // sets lower bounds, plus 1 so they it won't guess the same number again.
        lowest = currentNumber + 1;

        // outputs if higher
        return `Your number is higher? Is it ${createGuess()}? | Guesses: ${guesses}`;

        case "correct":

        // outputs if correct
        return `I knew it was ${currentNumber}! | Guesses: ${guesses}`;
    }
  }
}
