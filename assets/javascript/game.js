//Attach to HTML

var newGame = document.getElementById('newgamebutton');
var underscores = document.getElementById('replacingunderscores');
var lettersGuessed = document.getElementById("lettersguessed");
var guessesLeft = document.getElementById("guessesleft");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var messageGameRunning = document.getElementById("gamerunning");
var messageLetterAlready = document.getElementById("letteralready");



//A check letter function that takes in the letter you guessed and sees if it's in the word
//Check for incorrect letter
//Check to see if you're losing
//Check to see if you win
//Add event listening for 'new game' button
//Add onkeyup event to trigger letter guesses

//Create variables for game (like the word bank, wins, losses, the users guesses, the guesses left, game running, picked word placeholder, guessed letter bank to store the guessed letters, and the incorrect letter bank)

var musicals = ["dont cry for me argentina", "tomorrow", "i dreamed a dream", "memory", "the phantom of the opera"];
var wins = 0;
var losses = 0;
var guessesLeft = 15;
var gameOn = false;
var randomPickedWord = " ";
var randomPickedWordPlaceholder = " ";
var randomPickedWordPlaceholderArray = [];
var correctGuessedLetterArray = [];
var incorrectGuessedLetterArray = [];


//'New game' function to reset all stats, pick new word and create placeholders
function startGame() {
    gameOn = true;
    guessesLeft = 15;
    correctGuessedLetterArray = [];
    incorrectGuessedLetterArray = [];
    randomPickedWordPlaceholderArray = [];
    randomPickedWord = musicals[Math.floor(Math.random() * musicals.length)];
    // PICK A NEW WORD: PICK A RANDOM WORD FROM THE MUSICALS ARRAY. Generates a random index out of that word bank and gets a new word out.
    //This rounds a number DOWNWARDS to the nearest integer, and returns the result from within that array (what's in the bracket is only a number).

        //LOOPS THROUGH NEW PICKED WORD. Create placeholders out of new picked word:
    for (var i = 0; i < randomPickedWord.length; i++) { //responsible for just incrementing the variable i, doesn't care about the random word.
    //Check to see what kind of a word you're picking
        if (randomPickedWord[i] === " ") {
            randomPickedWordPlaceholderArray.push(" "); //Automatically creates spaces for you. Hard for user to guess a space. So if it is an empty space, push an empty space.
        } else {
            randomPickedWordPlaceholderArray.push("_") //If it's not an empty space, push an underscore.
        }
    }

    // Write all the HTML
    guessesLeft.textContent = guessesLeft;
    replacingunderscores.textContent = randomPickedWordPlaceholderArray.join("");
    lettersGuessed.textContent = incorrectGuessedLetterArray;
}


// This is the letter guess function. It will take in a letter you press and see if it's in the selected word or not.
    function guessingTheLetter(letter) {
        if (gameOn === true && correctGuessedLetterArray.indexOf(letter) === -1) {
        //If the game is running and we haven't guessed the letter yet, then we'll run our game in here and push letter into the guessed letter bank.
        correctGuessedLetterArray.push(letter);
        //Check if guessed letter is in the picked word: Loop over picked word and run an if statement. If at any point the letter we guessed is equal to the picked word letter at i (at any of those characters), we're going to select our picked placeholder at i and swap it out for the true letter. 
        for (var i = 0; i < randomPickedWord.length; i++) {
            if (randomPickedWord[i] === letter.toLowerCase()) {
                //Convert to lower case to compare them correctly
                randomPickedWordPlaceholderArray[i] = randomPickedWord[i];
                //Then, if they match, switch the placeholder character with the actual letter.
            }
        messageLetterAlready.textContent = ""; //This is to cancel out the 'you picked this already' message so it no longer displays it (if they then pick another)
        }
        underscores.textContent = randomPickedWordPlaceholderArray.join(); //This is to join the placeholder with the correct letter

        checkIfIncorrect(letter);
    }
        else {
            if (gameOn === false) {
            messageGameRunning.textContent = "Click the new game button to start the game!";
        } else {
            messageLetterAlready.textContent = "You picked this already! Pick another!";
                }
            }
    }
    


//Check incorrect letter
function checkIfIncorrect(letter) {
    //Checking to see if guessed letter exists in the picked word placeholder array
    if (randomPickedWordPlaceholderArray.indexOf(letter.toLowerCase()) === -1) {
        guessesLeft--;//Deduct a guess
        guessesleft.textContent = guessesLeft; //Show guesses left on html
        incorrectGuessedLetterArray.push(letter);//Push the incorrect letter to this letter bank
        letteralready.textContent = randomPickedWordPlaceholderArray.join(); //Post to html
    }
}


document.onkeyup = function(event) {
        // This function is run whenever the user presses a key for their user guess.
    guessingTheLetter(event.key);
        // Determines which key was pressed.
    }

    startGame();   
    

   



//THE BELOW CHECKS TO SEE IF THE GUESSED LETTER EXISTS WITHIN THE RANDOM WORD ARRAY: Search randomWord for the userGuesses (looking for the index)/seeing if any of the userGuesses exist within the RandomWord array. If it does, we'll get a value greater than -1. If the letter that the user presses actually exists within the word, you'll get a value greater than -1. If it doesn't, you'll get -1.