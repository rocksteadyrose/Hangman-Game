//Create an array of words
//Choose word randomly
//Create underscore based on length of words
//Get user's guess
//Check if guess is right
//If right, push to right array
//If wrong, push to wrong array
//Award points/remove points from guesses

//----------------------------------------

// Words computer will select from
var words = ["dont cry for me argentina", "tomorrow", "i dreamed a dream", "memory", "the phantom of the opera"];

// Define alphabet letters that user can pick from
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 12; // guessesLeft is how many attempts user has remaining in the round
var guessesSoFar = []; // guessesSoFar is an array that will hold all the user's guesses in each round
var userGuess; // userGuess is what the user picks by pressing a key
var wordToGuess = words[Math.floor(Math.random() * words.length)]; // Have computer pick a random word and store it in wordToBeGuessed
var lettersFromWord = []; // lettersFromWord is an array that will hold the letters of the wordToBeGuessed

//----------------------------------------

// Separate the wordToBeGuessed apart (one of the random musical words) into an array so that each character is one array element followed by false, as the next element then the second character then the element false, and so on. For example:
// If the word was "hi," then the array would be ["h", false, "i", false]
// However, if the character is a space then the next element should be true.
// First define the function (for later reuse) then call it right away.


function makeWordAnArray() {
    for (var i = 0, j = 0; i < wordToGuess.length; i++) { // /responsible for just incrementing the variable i and j, doesn't care about the random word
        lettersFromWord[j] = wordToGuess.charAt(i);
        //console.log(lettersFromWord); produces m false e false m false...
        j++
        //The 'for loop' creates a looping variable that goes up to wordsToGuess.length. Each time around the loop, we add a new element to the lettersFromWord that will be the same length as wordsToGuess.
        //Inside the for loop, we have repeating code.
        //LettersFromWord: stores the array values and sets it equal to WordsToGuess.charAt: The charAt() method returns the characters at the specified index in a string. So, we're storing the individual characters in the lettersFromWord array because of the charAt.
        if (wordToGuess.charAt(i) != " ") { 
            lettersFromWord[j] = false;
        } else {
            lettersFromWord[j] = true;
        }
        j++
    }
}

//----------------------------------------

function gameStartEnd() {

    makeWordAnArray();
    var anyKey = document.getElementById("start").textContent = "Start";
    var space = document.getElementById("replacingunderscores");

    for (var i = 0, j = 0; i < wordToGuess.length; i++) {

        if (wordToGuess.charAt === " ") {
            space = "  "; 
        } else {
        
            (wordToGuess.charAt === " _ ")

        }
        
    }

}

//Call function from before that breaks apart the random word into an array of letters
makeWordAnArray();

//User functions

document.onkeyup = function(event) {

    userGuess = event.key;

}

gameStartEnd();


