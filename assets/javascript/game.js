//Create an array of words
//Choose word randomly
//Create underscore based on length of words
//Get user's guess
//Check if guess is right
//If right, push to right array
//If wrong, push to wrong array
//Award points/remove points from guesses


var musicals = ["dontcryformeargentina", "tomorrow", "idreamedadream", "memory", "thephantomoftheopera"];
var wins = 0;
//var points = 0;
var guessesLeft = 15;
var underScores = [];
var userGuesses = [];
var lettersGuessed = [];
var randomWord;


function startGame() {
    randomWord = musicals[Math.floor(Math.random() * musicals.length)];
    // PICK RANDOM WORD FROM THE MUSICALS ARRAY. 
    //This rounds a number DOWNWARDS to the nearest integer, and returns the result from within that array. What's in the bracket is only a number.

    for (var i = 0; i < randomWord.length; i++) { //responsible for just incrementing the variable i, doesn't care about the random word
        underScores.push('_'); //pushes the random word to the page as underscores
    } 

    // THE ABOVE IS AN 'EMPTY LETTER ANSWERS ARRAY': An array with empty letters to match the number of empty letters in the word. The 'for loop' creates a looping variable that goes up to (but doesn't include) musicals.length. Each time around the loop, we add a new element to the ANSWERS array that will be the same length as randomWord. When the loop finishes, the ANSWERS array will be the same length as randomWord but will just be blanks.
    
    document.getElementById("replacingunderscores").textContent = underScores.join(" ");
    //Printing underscores to the screen. PS: .join(" ") will get rid of the commas.
}

document.onkeyup = function(event) {
     // This function is run whenever the user presses a key for their user guess.

    userGuesses = event.key;
    // Determines which key was pressed.

    //THE BELOW CHECKS TO SEE IF THE GUESSED LETTER EXISTS WITHIN THE RANDOM WORD ARRAY: Search randomWord for the userGuesses (looking for the index)/seeing if any of the userGuesses exist within the RandomWord array. If it does, we'll get a value greater than -1. If the letter that the user presses actually exists within the word, you'll get a value greater than -1. If it doesn't, you'll get -1.

    if (randomWord.indexOf(userGuesses) > -1) {

        for (var i = 0; i < randomWord.length; i++) {

            if (randomWord[i] === userGuesses) {
            //If that first letter in the random word is equal to the userGuesses, then go down to UnderScores at index 0 and replace that with UserGuesses.

                underScores[i] = userGuesses;
                document.getElementById("replacingunderscores").textContent = userGuesses;
                wins++;
                document.getElementById("wins").textContent = wins;
            } 
        }
    }
            
    else {

        lettersGuessed.push(userGuesses);
        guessesLeft--;
        //Push the user guesses that are incorrect into the lettersGuessed array and deduct from the guessesLeft
        document.getElementById("guessesleft").textContent = guessesLeft;
        //Prints the number of guesses remaining
        document.getElementById("lettersguessed").textContent = lettersGuessed;
        //Prints the letters to the screen that the user has guessed incorrectly
    }
}

startGame();

