
//PSEUDO CODE
// Define global variables
// Have a start game section that resets everything, like what you see on the screen and the win/lose counter, etc
// Have computer pick a new RANDOM WORD from our MUSICALS bank and turn letters into PLACEHOLDERS
// Guess the letter: 1. Game will first see if you've already guessed the letter. 2. Then it will check to see if you picked the correct letter. If so, it will replace the underscore from the RANDOM PICKED WORD PLACEHOLDER with your correct letter in the RANDOM PICKED LETTER. 3. If not, your letter will go in the INCORRECT GUESSED LETTER ARRAY.
//Check to see if you're losing or winning
//Add onkeyup event to trigger letter guesses

//------------------------------------------------------------------------------------------------------------------
//GLOBAL VARIABLES FOR HTML
var newGame = document.getElementById('newgamebutton');
var underscores = document.getElementById('replacingunderscores');
var lettersguessed = document.getElementById("lettersguessed");
var guessesLeft = document.getElementById("guessesleft");
var wins = document.getElementById("wins");
var losses = document.getElementById("lossesID");
var messageGameRunning = document.getElementById("gamerunning");
var messageLetterAlready = document.getElementById("letteralready");

//------------------------------------------------------------------------------------------------------------------
//GLOBAL VARIABLES
var musicals = ["dont cry for me argentina", "tomorrow", "i dreamed a dream", "memory", "the phantom of the opera"]; //Variables to guess
var wins = 0; //Win counter
var losses = 0;
var guessesLeft = 15; //Amount of guesses left
var gameOn = false; //Has the game started - set to false until "function StartGame"
var randomPickedWord = ""; //Created from the random musicals variable array
var randomPickedWordPlaceholder = " "; //Array automatically creates spaces for you. Hard for user to guess a space. So if it is an empty space, push an empty space.
var randomPickedWordPlaceholderArray = []; //Automatically creates spaces
var guessedLetterArray = []; //Correct guessed letter bank
var incorrectGuessedLetterArray = []; //Bank where we store the incorrectly guessed letters

//------------------------------------------------------------------------------------------------------------------
// NEW GAME SECTION: To reset all stats, pick new word and push placeholders into the words
function startGame() {
    gameOn = true;
    guessesLeft = 15;
    wins = 0;
    guessedLetterArray = [];
    incorrectGuessedLetterArray = [];
    randomPickedWordPlaceholderArray = [];
    guessesLeft.textContent = guessesLeft;
    losses = 0;
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
}
//------------------------------------------------------------------------------------------------------------------

// GUESSING SECTION: This is the letter guess function. It will take in a letter you press and see if it's in the selected word or not.
    function guessingTheLetter(letter) {
        if (gameOn === true && guessedLetterArray.indexOf(letter) === -1) {
        //If the game is running and we haven't guessed the letter yet, then we'll run our game in here and push letter into the correct guessed letter bank.
        guessedLetterArray.push(letter);
        //Check if guessed letter is in the picked word: Loop over picked word and run an if statement. If at any point the letter we guessed is equal to the picked word letter at i (at any of those characters), we're going to select our picked placeholder at i and swap it out for the true letter. 
        for (var i = 0; i < randomPickedWord.length; i++) {
            if (randomPickedWord[i] === letter.toLowerCase()) {
                //Convert to lower case to compare them correctly
                randomPickedWordPlaceholderArray[i] = randomPickedWord[i]; }
                //Then, if they match, switch the placeholder character with the actual letter.
            }
            messageLetterAlready.textContent = ""; //This is to cancel out the 'you picked this already' message so it no longer displays it (if they then pick another)
            underscores.textContent = randomPickedWordPlaceholderArray.join(); //This is to join the placeholder with the correct letter
            wrongLetter(letter);
        }
        else {
            if (gameOn === false) {
            messageGameRunning.textContent = "Click the new game button to start the game!"; }
            else {
            messageLetterAlready.textContent = "You picked this already! Pick another!";
                }
    }
    }
//------------------------------------------------------------------------------------------------------------------

    function wrongLetter(letter) {
        if (randomPickedWordPlaceholderArray.indexOf(letter.toLowerCase()) === -1) {
            guessesLeft--;//Deduct a guess
            guessesleft.textContent = guessesLeft; //Show guesses left on html
            incorrectGuessedLetterArray.push(letter);//Push the incorrect letter to this letter bank
            lettersguessed.textContent = incorrectGuessedLetterArray;
    }
}

//------------------------------------------------------------------------------------------------------------------

//RESET ETC

    function points(letter) {
        if (guessesLeft === 0) {
            losses++;
            losses.textContent = losses; //Show guesses left on html
        }
    }


//USER INTERACTION

document.onkeyup = function(event) {
        // This function is run whenever the user presses a key for their user guess.
    guessingTheLetter(event.key);
        // Determines which key was pressed.
    }
//------------------------------------------------------------------------------------------------------------------
//Start game
startGame();   