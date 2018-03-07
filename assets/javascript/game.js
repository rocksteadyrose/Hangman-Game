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
var points = 0;
var wrongLetter = [];
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
    
    document.getElementById('replacingunderscores').textContent = underScores.join(" ");
    //Printing underscores to the screen. PS: .join(" ") will get rid of the commas.

    document.getElementById("guessesleft").textContent = guessesLeft;
    //HTML
    lettersGuessed = [];
    //Reset
}

document.onkeyup = function(event) {
     // This function is run whenever the user presses a key for their user guess.

    userGuesses = event.key;
    // Determines which key was pressed.

    //THE BELOW CHECKS TO SEE IF THE GUESSED LETTER EXISTS WITHIN THE RANDOM WORD ARRAY: Search randomWord for the userGuesses (looking for the index)/seeing if any of the userGuesses exist within the RandomWord array. If it does, we'll get a value greater than -1. If the letter that the user presses actually exists within the word, you'll get a value greater than -1. If it doesn't, you'll get -1.

    if (randomWord.indexOf(userGuesses) > -1) {

        for(var i = 0; i < randomWord.length; i++) {

            if (randomWord[i] === userGuesses) {
            //If the letter is equal to the userGuesses, then go down to UnderScores at index 0 and replace that with UserGuesses.

            underScores[i] = userGuesses;

            } 
        }

        points++;

    }
            
    else {

        wrongLetter.push(userGuesses);
        guessesLeft--;
        //Push the user guesses into the wrongLetter array
    }

    document.getElementById("lettersguessed").textContent = lettersGuessed;
}


startGame();






                               
            // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.             
            // Select the div with the id "demo", and insert the following HTML into it.
            //document.getElementById("demo").innerHTML = userGuess;

            


            //while (remainingLetters > 0) {

            //Update the ANSWER ARRAY according to the guess, so we add this code to the else statement:
           // for (var j = 0; j < words.length; j++) {
                //if (words[j] === userGuess) {
                    //answerArray[j] = guess;
                    //remainingLetters--;
                //}
            //}

        // This is a variable of the remaining letters, and it's the same length as the word the user is trying to guess. Each time they guess correctly, this value/length is reduced by one to coincide with the letter in the word.
        //var remainingLetters = words.length;
   // 
   //

    //var musical = [["i," "d," "r," "e," "a," "m," "e," "d," "a," "d," "r," "e," "a," "m,"], 
//["t", "o", "m", "o" "r", "r", "o", "w",],
//["d", "o", "n", "t", "c", "r", "y", "f", "o", "r", "m", "e", "a", "r", "g", "e", "n", "t", "i", "n", "a"]]