
//PSEUDO CODE
// Define global variables
// Have a start game section that resets everything, like what you see on the screen and the win/lose counter, etc
// Have computer pick a new RANDOM WORD from our MUSICALS bank and turn letters into PLACEHOLDERS
// Guess the letter: 1. Game will first see if you've already guessed the letter. 2. Then it will check to see if you picked the correct letter. If so, it will replace the underscore from the RANDOM PICKED WORD PLACEHOLDER with your correct letter in the RANDOM PICKED LETTER. 3. If not, your letter will go in the INCORRECT GUESSED LETTER ARRAY.
//Check to see if you're losing or winning
//Add onkeyup event to trigger letter guesses

//------------------------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------------------------
//GLOBAL VARIABLES FOR HTML
var newGame = document.getElementById("newgamebuttonID");
var underscores = document.getElementById("replacingunderscoresID");
var lettersGuessedDom = document.getElementById("lettersguessedID");
var winsDom = document.getElementById("winsID");
var lossesDom = document.getElementById("lossesID");
var guessesCounterDom = document.getElementById("guessesleftID");
guessesCounterDom.textContent = guessesCounter;
var messageGameRunning = document.getElementById("gamerunningID");
var messageLetterAlready = document.getElementById("letteralreadyID");

//GLOBAL VARIABLES
var musicalsList = ["dont cry for me argentina", "tomorrow", "i dreamed a dream", "memory", "the phantom of the opera"]; //Variables to guess
var alphabetString = "abcdefghijklmnopqrstuvwxyz";
var alphabetLetters = [];
var userTypes;
var wins = 0; //Win counter
var guessesCounter = " ";
var losses = 0; //Losses counter
var gameOn = false; //Has the game started - set to false until "function StartGame"
var musicalPickedWord = ""; //Created from the random musicals variable array
var musicalPlaceholder = " "; // Spaces to put in below placeholder array
var musicalPlaceholderArray = []; //Automatically creates spaces
var correctGuessedLetterArray = []; //Correct guessed letter bank
var incorrectGuessedLetterArray = []; //Bank where we store the incorrectly guessed letters
alphabetLetters = alphabetString.split(""); //Splits the letters and puts them into the empty array, alphabetLetters

//------------------------------------------------------------------------------------------------------------------
// NEW GAME SECTION: To reset all stats, pick new word and push placeholders into the words
function startGame() {
    gameOn = true;
    musicalPlaceholderArray = [];
    correctGuessedLetterArray = [];
    incorrectGuessedLetterArray = [];
    guessesCounter = "";
    guessesCounterDom.textContent = guessesCounter;
    guessesCounter = 5;
    messageLetterAlready.textContent = "";
}


function pickRandomWord() {
musicalPickedWord = musicalsList[Math.floor(Math.random() * musicalsList.length)];
    // PICK A NEW WORD: PICK A RANDOM WORD FROM THE MUSICALS ARRAY. Generates a random index out of that word bank and gets a new word out.
    //This rounds a number DOWNWARDS to the nearest integer, and returns the result from within that array (what's in the bracket is only a number).

        //LOOPS THROUGH NEW PICKED WORD. Create placeholders out of new picked word:
    for (var i = 0; i < musicalPickedWord.length; i++) { //responsible for just incrementing the variable i, doesn't care about the random word.
    //Check to see what kind of a word you're picking
        if (musicalPickedWord[i] === " ") {
            musicalPlaceholderArray.push(" "); //Automatically creates spaces for you. Hard for user to guess a space. So if it is an empty space, push an empty space.
        } else {
            musicalPlaceholderArray.push("_") //If it's not an empty space, push an underscore.
        }
    }
    underscores.textContent = musicalPlaceholderArray.join("");
}
//------------------------------------------------------------------------------------------------------------------
// GUESSING SECTION: This is the letter guess function. It will take in a letter you press and see if it's in the selected word or not.
    function guessingTheLetter() {

                if (gameOn === true && correctGuessedLetterArray.indexOf(userTypes) === -1) {
                            
                    for (var i = 0; i < musicalPickedWord.length; i++) {

                        if (musicalPickedWord[i] === userTypes) {

                            musicalPlaceholderArray[i] = musicalPickedWord[i]; } }

                    correctGuessedLetterArray.push(userTypes);

                    underscores.textContent = musicalPlaceholderArray.join("");

                }
                wrongLetter();
                pointsResets();

                if (gameOn === false) {
                    messageGameRunning.textContent = "Click the new game button to start the game!"; }

                else if (gameOn === false) {
                    messageLetterAlready.textContent = "You picked this already! Pick another!"; }

                else {messageLetterAlready.textContent = "";}

        //Then award points/reset
    }

    function wrongLetter () {

        if (musicalPickedWord.indexOf(userTypes) < 0 && alphabetLetters.indexOf(userTypes) > -1) {              
            incorrectGuessedLetterArray.push(userTypes);
            lettersGuessedDom.textContent = incorrectGuessedLetterArray;
            guessesCounter--;
            guessesCounterDom.textContent = guessesCounter; }

        else if (alphabetLetters.indexOf(userTypes) === -1) {
            incorrectGuessedLetterArray.push(userTypes) === false; }
        }
    

//RESET ETC

    function pointsResets() {
        if (guessesCounter === 0) {
            losses++;
            lossesDom.textContent = losses;
        }
        if (losses === 5) {
            alert("GAME OVER!")
        }
        if (musicalPickedWord === musicalPlaceholderArray.join("")) {
            wins++;
            winsDom.textContent = wins;
            musicalPickedWord[i+1];
            musicalPlaceholderArray = [];
            underscores.textContent = musicalPlaceholderArray.join("");
            for (var i = 0; i < musicalPickedWord.length; i++) {
                if (musicalPickedWord[i] === userTypes) {
                    musicalPlaceholderArray[i] = musicalPickedWord[i]; }
                    guessingTheLetter();
            
            //lettersGuessedDom.textContent = "";
            }
        startGame();
        pickRandomWord();
        if (wins === 5) {
            alert("YOU WIN");
        }
        }
    }

        
    

        

    
//USER INTERACTION

document.onkeyup = function(event) {
        // This function is run whenever the user presses a key for their user guess.
        userTypes = event.key.toLowerCase();
        // Determines which key was pressed.
            guessingTheLetter();
            pointsResets();
    }
//-----------------------------------------------------------------------------------------------------------


//Start game
startGame();
//   

pickRandomWord();