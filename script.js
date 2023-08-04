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
    return `Out of bounds! | Number of guesses: ${functionCounter}!`;

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

// global current number variable
let currentNumber = 1;

function startCompGuess(num) {
  // This should return a string that denotes the first guessed number
  // YOUR CODE ...

  // Displays CPU guess
  return `Is your number ${currentNumber}?`;

};

function compGuess(reply) {
  /* 
    *   The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating th elogic and response.

    This should return a string indicating the computers response.
    */
}
