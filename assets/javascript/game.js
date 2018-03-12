
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
var pressAnyKeyDom = document.getElementById("pressanykeyID");
//var musicalPic1 = document.getElementById("musicalimage1");

//GLOBAL VARIABLES
var musicalsList = ["dont cry for me argentina", "tomorrow", "i dreamed a dream", "memory", "the phantom of the opera"]; //Variables to guess
var alphabetString = "abcdefghijklmnopqrstuvwxyz";
var alphabetLetters = [];
var notLetters = [];
var userTypes;
var wins = 0; //Win counter
var guessesCounter = " ";
var gameOn = false; //Has the game started - set to false until "function StartGame"
var musicalPickedWord = ""; //Created from the random musicals variable array
var musicalPlaceholder = " "; // Spaces to put in below placeholder array
var musicalPlaceholderArray = []; //Automatically creates spaces
var correctGuessedLetterArray = []; //Correct guessed letter bank
var incorrectGuessedLetterArray = []; //Bank where we store the incorrectly guessed letters
alphabetLetters = alphabetString.split(""); //Splits the letters and puts them into the empty array, alphabetLetters

//-----------------
//IMAGES
var musicalPic1;
var musicalPic2;
var musicalPic3;
var musicalPic4;
var musicalPic5;
var musicalPic1a;
var musicalPic2a;
var musicalPic3a;
var musicalPic4a;
var musicalPic5a;



//"<img src=\"assets/images/annie1.jpg\" class=\"musicalPic2\" alt=\"Annie\">";document.querySelector("#musicalPic2").innerHTML = musicalPic2;
//"<img src=\"assets/images/phantom1.jpg\" class=\"musicalPic3\" alt=\"Phantom\">";document.querySelector("#musicalPic3").innerHTML //= musicalPic3;
//"<img src=\"assets/images/lesmis1.jpg\" class=\"musicalPic4\" alt=\"LesMis\">";document.querySelector("#musicalPic4").innerHTML = musicalPic4;
//"<img src=\"assets/images/cats1.jpg\" class=\"musicalPic5\" alt=\"Cats\">";document.querySelector("#musicalPic5").innerHTML = musicalPic4;

//------------------------------------------------------------------------------------------------------------------
// NEW GAME SECTION: To reset all stats, pick new word and push placeholders into the words
function startGame() {
    gameOn = true;
    musicalPlaceholderArray = [];
    correctGuessedLetterArray = [];
    incorrectGuessedLetterArray = [];
    guessesCounter = 10;
    guessesCounterDom.textContent = guessesCounter;
    messageLetterAlready.textContent = "";
    pressAnyKeyDom.textContent = "Press any key to get started!";
}

function contentReset() {
    messageLetterAlready.textContent = "";
    lettersGuessedDom.textContent = "";
    guessesCounter = 10;
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

                pressAnyKeyDom.textContent = "";

                if (gameOn === true && correctGuessedLetterArray.indexOf(userTypes) === -1) {
                            
                    for (var i = 0; i < musicalPickedWord.length; i++) {

                        if (musicalPickedWord[i] === userTypes) {

                            musicalPlaceholderArray[i] = musicalPickedWord[i]; } }

                    correctGuessedLetterArray.push(userTypes);

                    messageLetterAlready.textContent = "";

                    underscores.textContent = musicalPlaceholderArray.join("");

                    if (musicalsList[0] === musicalPlaceholderArray.join("")) {
                        musicalPic1="<img src=\"assets/images/evita.jpg\" class=\"evita1\" alt=\"Evita\">";document.querySelector("#musicalPic").innerHTML = musicalPic1;
                        
                        musicalPic1a="<img src=\"assets/images/evita2.jpg\" class=\"evita2\" alt=\"Evita\">";document.querySelector("#musicalPicb").innerHTML = musicalPic1a;}

                    if (musicalsList[1] === musicalPlaceholderArray.join("")) {
                        musicalPic2="<img src=\"assets/images/annie.jpg\" class=\"annie1\" alt=\"Annie\">";document.querySelector("#musicalPic").innerHTML = musicalPic2;

                        musicalPic2a="<img src=\"assets/images/annie2.jpg\" class=\"annie2\" alt=\"Annie\">";document.querySelector("#musicalPicb").innerHTML = musicalPic2a;}

                    if (musicalsList[2] === musicalPlaceholderArray.join("")) {
                        musicalPic3="<img src=\"assets/images/lesmis.jpg\" class=\"lesmis1\" alt=\"LesMis\">";
                        
                        document.querySelector("#musicalPic").innerHTML = musicalPic3;}

                    if (musicalsList[2] === musicalPlaceholderArray.join("")) {
                        musicalPic3a="<img src=\"assets/images/lesmis2.jpg\" class=\"lesmis2\" alt=\"LesMis\">";
                        document.querySelector("#musicalPicb").innerHTML = musicalPic3a;}

                    if (musicalsList[3] === musicalPlaceholderArray.join("")) {
                        musicalPic4="<img src=\"assets/images/cats.jpg\" class=\"cats1\" alt=\"Cats\">";document.querySelector("#musicalPic").innerHTML = musicalPic4;
                        
                        musicalPic4a="<img src=\"assets/images/cats2.jpg\" class=\"cats2\" alt=\"Cats\">";document.querySelector("#musicalPicb").innerHTML = musicalPic4a;}

                    if (musicalsList[4] === musicalPlaceholderArray.join("")) {
                        musicalPic5="<img src=\"assets/images/phantom.jpg\" class=\"phantom1\" alt=\"Phantom\">";document.querySelector("#musicalPic").innerHTML = musicalPic5;
                        
                        musicalPic5a="<img src=\"assets/images/phantom2.jpg\" class=\"phantom2\" alt=\"Phantom\">";document.querySelector("#musicalPicb").innerHTML = musicalPic5a;}

                    wrongLetter();
                    pointsSystem();
                }

                else if (gameOn === false) {
                    messageGameRunning.textContent = "Click the new game button to start the game!"; }

                else { messageLetterAlready.textContent = "You picked this already! Pick another!";}
    }

    function wrongLetter () {

        if (musicalPickedWord.indexOf(userTypes) < 0 && alphabetLetters.indexOf(userTypes) >= 0) {          //if the guess ISN'T in the musical word AND the guess is a letter
            incorrectGuessedLetterArray.push(userTypes);
            lettersGuessedDom.textContent = incorrectGuessedLetterArray;
            guessesCounter--;
            guessesCounterDom.textContent = guessesCounter;}

        if (alphabetLetters.indexOf(userTypes) < 0) {
                //if the guess ISN'T a letter
            notLetters.push(userTypes);}            
    }

//RESET ETC

    function pointsSystem() {
        //if (musicalPickedWord != musicalPlaceholderArray.join("")) {
            //guessesCounter--;
        //}

        if (musicalPickedWord === musicalPlaceholderArray.join("")) {
            wins++;
            winsDom.textContent = wins;
            musicalPickedWord[i+1];
            musicalPlaceholderArray = [];
            underscores.textContent = musicalPlaceholderArray.join("");
            for (var i = 0; i < musicalPickedWord.length; i++) {
                if (musicalPickedWord[i] === userTypes) {
                    musicalPlaceholderArray[i] = musicalPickedWord[i]; }
                    //lettersGuessedDom.textContent = "";
                    guessingTheLetter();
                    contentReset();
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
    }
//-----------------------------------------------------------------------------------------------------------


//Start game
startGame();
pickRandomWord();