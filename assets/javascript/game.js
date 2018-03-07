//Create an array of words
//Choose word randomly
//Create underscore based on length of words
//Get user's guess
//Check if guess is right
//If right, push to right array
//If wrong, push to wrong array


var musicals = ["dontcryformeargentina", "tomorrow", "idreamedadream", "memory", "the phantomoftheopera"];
var wins = 0;
var wrongLetter = [];
var guessesLeft = 15;
var underScores = [];
var userGuesses = 0;
var randomWord;


function startGame() {
    // PICK RANDOM WORD FROM ARRAY. This rounds a number DOWNWARDS to the nearest integer, and returns the result from within that array.
    randomWord = musicals[Math.floor(Math.random() * musicals.length)];
    console.log("random word = " + randomWord);

    // 'EMPTY LETTER ANSWERS ARRAY': An array with empty letters to match the number of empty letters in the word. The for loop creates a looping variable that goes up to (but doesn't include) words.length. Each time around the loop, we add a new element to the ANSWERS array that will be the same length as randomWord. When the loop finishes, the ANSWERS array will be the same length as randomWord but will just be blanks.
    for (var i = 0; i < randomWord.length; i++) 
    {
        underScores.push('_'); //pushes the random word to the page as underscores
        }

    //Printing underscores to the screen. PS: .join(" ") will get rid of the commas.
    document.getElementById('replacingunderscores').textContent = underScores.join(" ");

    //Reset
    wrongLetter = [];
    guessesLeft = 15;

    //HTML
    document.getElementById("guessesleft").textContent = guessesLeft;

    }

    // User Guesses: This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // Determines which key was pressed.
        userGuesses = event.key;

    //Getting the index of RandomWord and seeing if any of the userGuesses exist within RandomWord. If it does, we'll get a value greater than -1. If the letter that the user presses actually exists within the word, you'll get a value greater than -1. If it doesn't, you'll get -1.
        if (randomWord.indexOf(userGuesses) > -1) 
        {
           for(var i = 0; i < randomWord.length; i++)
           { 
               //If the letter is equal to the userGuesses, then go down to UnderScores at index 0 and replace that with UserGuesses.
               if (randomWord[i] === userGuesses)
                {
                    underScores[i] = userGuesses;
                }
            }
        }
                
        else {
            //Push the user guesses into the wrongLetter array
            wrongLetter.push(userGuesses);
            guessesLeft--;
            console.log(guessesLeft);
        }
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
   // }
   // }

    //var musical = [["i," "d," "r," "e," "a," "m," "e," "d," "a," "d," "r," "e," "a," "m,"], 
//["t", "o", "m", "o" "r", "r", "o", "w",],
//["d", "o", "n", "t", "c", "r", "y", "f", "o", "r", "m", "e", "a", "r", "g", "e", "n", "t", "i", "n", "a"]]