//PSEUDO CODE
// Define variables
// Have a start game section and a reset section
// Have computer pick a new RANDOM WORD from our MUSICALS bank and turn letters into PLACEHOLDERS
// Guess the letter: 1. Game will first see if you've already guessed the letter. 2. Then it will check to see if you picked the correct letter. If so, it will replace the underscore from the RANDOM PICKED WORD PLACEHOLDER with your correct letter in the RANDOM PICKED LETTER. 3. If not, your letter will go in the INCORRECT GUESSED LETTER ARRAY.
//Only allow 'letter' guesses, so have an array just for alphabet and verify that with the user guesses. Put any non-alphaphet user guesses into their own array, and put any wrong guesses that are alphabet guesses into the INCORRECT GUESSED LETTER ARRAY
//Check to see if you're losing or winning
//Add onkeyup event to trigger guesses
//------------------------------------------------------------------------------------------------------------------
//GLOBAL VARIABLES FOR DOM
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
var turnSoundOnDom = document.getElementById("turnsoundonID");
var correctAnswerDom = document.getElementById("correctanswerID");
var soLong = document.getElementById("endvideoID");
var superCali = document.getElementById("startvideoID");
//------------------------------------------------------------------------------------------------------------------
//GLOBAL VARIABLES
var musicalsList = ["dont cry for me argentina", "tomorrow", "i dreamed a dream", "memory", "the phantom of the opera"];
var alphabetString = "abcdefghijklmnopqrstuvwxyz";
var alphabetLetters = [];
var notLetters = [];
var userTypes;
var dontCryAudio = new Audio("assets/audio/dontcryformeargentina.mp3");
var tomorrowAudio = new Audio("assets/audio/tomorrow.mp3"); 
var iDreamedAudio = new Audio("assets/audio/idreamedadream.mp3"); 
var memoryAudio = new Audio("assets/audio/memory.mp3"); 
var phantomAudio = new Audio("assets/audio/thephantomoftheopera.mp3");
var wins;
var guessesCounter = " ";
var gameOn = false;
var musicalPickedWord = "";
var musicalPlaceholder = " ";
var musicalPlaceholderArray = [];
var correctGuessedLetterArray = [];
var incorrectGuessedLetterArray = [];
alphabetLetters = alphabetString.split("");
//------------------------------------------------------------------------------------------------------------------
// NEW GAME SECTION: To reset all stats, pick new word and push placeholders into the words
function startGame() {
    gameOn = true;
    musicalPlaceholderArray = [];
    correctGuessedLetterArray = [];
    incorrectGuessedLetterArray = [];
    guessesCounter = 10;
    wins = 0;
    guessesCounterDom.textContent = guessesCounter;
    messageLetterAlready.textContent = "";
    pressAnyKeyDom.textContent = "Press any key to get on with the show!"; 
    turnSoundOnDom.textContent = "AND turn your sound up to sing along (you know you want to...)";
}
//------------------------------------------------------------------------------------------------------------------
// PICK RANDOM WORD:

function pickRandomWord() {
    musicalPickedWord = musicalsList[Math.floor(Math.random() * musicalsList.length)];
        for (var i = 0; i < musicalPickedWord.length; i++) { 
            if (musicalPickedWord[i] === " ") { 
                musicalPlaceholderArray.push(" ");
            } else {
                musicalPlaceholderArray.push("_")
            }
        }
    underscores.textContent = musicalPlaceholderArray.join("");
}
//------------------------------------------------------------------------------------------------------------------
// GUESSING SECTION:
function guessingTheLetter() {
    pressAnyKeyDom.textContent = "";
    turnSoundOnDom.textContent = "";

    if (gameOn === true && correctGuessedLetterArray.indexOf(userTypes) === -1) {
                
        for (var i = 0; i < musicalPickedWord.length; i++) {

            if (musicalPickedWord[i] === userTypes) {

                musicalPlaceholderArray[i] = musicalPickedWord[i]; } }

        correctGuessedLetterArray.push(userTypes);

        messageLetterAlready.textContent = "";

        underscores.textContent = musicalPlaceholderArray.join("");

        if (musicalsList[0] === musicalPlaceholderArray.join("")) {
            dontCryAudio.play();
            tomorrowAudio.pause();
            iDreamedAudio.pause();
            memoryAudio.pause();
            tomorrowAudio.pause();
            
            musicalPic1="<img src=\"assets/images/evita.jpg\" class=\"evita1\" alt=\"Evita\">";document.querySelector("#musicalPic").innerHTML = musicalPic1;
            
            musicalPic1a="<img src=\"assets/images/evita2.jpg\" class=\"evita2\" alt=\"Evita\">";document.querySelector("#musicalPicb").innerHTML = musicalPic1a;}

        if (musicalsList[1] === musicalPlaceholderArray.join("")) {
            tomorrowAudio.play();
            dontCryAudio.pause();
            iDreamedAudio.pause();
            memoryAudio.pause();
            phantomAudio.pause();

            musicalPic2="<img src=\"assets/images/annie.jpg\" class=\"annie1\" alt=\"Annie\">";document.querySelector("#musicalPic").innerHTML = musicalPic2;

            musicalPic2a="<img src=\"assets/images/annie2.jpg\" class=\"annie2\" alt=\"Annie\">";document.querySelector("#musicalPicb").innerHTML = musicalPic2a;}

        if (musicalsList[2] === musicalPlaceholderArray.join("")) {
            iDreamedAudio.play();
            phantomAudio.pause();
            dontCryAudio.pause();
            memoryAudio.pause();
            tomorrowAudio.pause();

            musicalPic3="<img src=\"assets/images/lesmis.jpg\" class=\"lesmis1\" alt=\"LesMis\">";   
            document.querySelector("#musicalPic").innerHTML = musicalPic3;

            musicalPic3a="<img src=\"assets/images/lesmis2.jpg\" class=\"lesmis2\" alt=\"LesMis\">";
            document.querySelector("#musicalPicb").innerHTML = musicalPic3a;}

        if (musicalsList[3] === musicalPlaceholderArray.join("")) {
            memoryAudio.play();
            phantomAudio.pause();
            iDreamedAudio.pause();
            dontCryAudio.pause();
            tomorrowAudio.pause();

            musicalPic4="<img src=\"assets/images/cats.jpg\" class=\"cats1\" alt=\"Cats\">";document.querySelector("#musicalPic").innerHTML = musicalPic4;
            
            musicalPic4a="<img src=\"assets/images/cats2.jpg\" class=\"cats2\" alt=\"Cats\">";document.querySelector("#musicalPicb").innerHTML = musicalPic4a;}

        if (musicalsList[4] === musicalPlaceholderArray.join("")) {
            phantomAudio.play();
            memoryAudio.pause();
            iDreamedAudio.pause();
            dontCryAudio.pause();
            tomorrowAudio.pause();

            musicalPic5="<img src=\"assets/images/phantom.jpg\" class=\"phantom1\" alt=\"Phantom\">";document.querySelector("#musicalPic").innerHTML = musicalPic5;
            
            musicalPic5a="<img src=\"assets/images/phantom2.jpg\" class=\"phantom2\" alt=\"Phantom\">";document.querySelector("#musicalPicb").innerHTML = musicalPic5a;}

        wrongLetter();
        pointsSystem();
    }

    else if (gameOn === false) {
        messageGameRunning.textContent = "Click the new game button to start the game!"; }

    else { messageLetterAlready.textContent = "You picked this already! Pick another!";}
}
//------------------------------------------------------------------------------------------------------------------
//WRONG LETTER
function wrongLetter () {

    if (musicalPickedWord.indexOf(userTypes) < 0 && alphabetLetters.indexOf(userTypes) >= 0) { 
        incorrectGuessedLetterArray.push(" " + userTypes)            
        lettersGuessedDom.textContent = incorrectGuessedLetterArray;
        guessesCounter--;
        guessesCounterDom.textContent = guessesCounter;}

    if (alphabetLetters.indexOf(userTypes) < 0) {
        notLetters.push(userTypes);}

        if (guessesCounter === 0 && musicalsList[0] === musicalPickedWord) {
            musicalsList.indexOf("dont cry for me argentina")
            musicalPic1="<img src=\"assets/images/evita.jpg\" class=\"evita1\" alt=\"Evita\">";document.querySelector("#musicalPic").innerHTML = musicalPic1;
            musicalPic1a="<img src=\"assets/images/evita2.jpg\" class=\"evita2\" alt=\"Evita\">";document.querySelector("#musicalPicb").innerHTML = musicalPic1a;
            contentReset();
            i = 0;
            if (confirm("The correct answer was 'Don't Cry For Me Argentina'! Wanna keep playing?"))
        {
                pickRandomWord();
                guessingTheLetter(); }
            else {
                alert("Goodnight and thank you for playing!");
                endGame();
            }

        } 
        else if (guessesCounter === 0 && musicalsList[1] === musicalPickedWord) {
            musicalPic2="<img src=\"assets/images/annie.jpg\" class=\"annie1\" alt=\"Annie\">";document.querySelector("#musicalPic").innerHTML = musicalPic2;
            musicalPic2a="<img src=\"assets/images/annie2.jpg\" class=\"annie2\" alt=\"Annie\">";document.querySelector("#musicalPicb").innerHTML = musicalPic2a;
            contentReset();
            i = 0;
                if (confirm("The correct answer was 'Tomorrow'! Wanna keep playing?")) {
                    pickRandomWord();
                    guessingTheLetter(); }
                else {
                    alert("Goodnight and thank you for playing!");
                    endGame();
                }
        } 
        else if (guessesCounter === 0 && musicalsList[2] === musicalPickedWord) {
            musicalPic3="<img src=\"assets/images/lesmis.jpg\" class=\"lesmis1\" alt=\"LesMis\">";   
            document.querySelector("#musicalPic").innerHTML = musicalPic3;
            musicalPic3a="<img src=\"assets/images/lesmis2.jpg\" class=\"lesmis2\" alt=\"LesMis\">";
            document.querySelector("#musicalPic").innerHTML = musicalPic3a;
            contentReset();
            i = 0;
                if (confirm("The correct answer was 'I Dreamed A Dream'! Wanna keep playing?")) {
                    pickRandomWord();
                    guessingTheLetter(); }
                else {
                    alert("Goodnight and thank you for playing!");
                    endGame();
                }
        }
            else if (guessesCounter === 0 && musicalsList[3] === musicalPickedWord) {
            musicalPic4="<img src=\"assets/images/cats.jpg\" class=\"cats1\" alt=\"Cats\">";document.querySelector("#musicalPic").innerHTML = musicalPic4;
            musicalPic4a="<img src=\"assets/images/cats2.jpg\" class=\"cats2\" alt=\"Cats\">";document.querySelector("#musicalPicb").innerHTML = musicalPic4a;
            contentReset();
            i = 0;
            if (confirm("The correct answer was 'Memory'! Wanna keep playing?")) {
                pickRandomWord();
                guessingTheLetter(); }
            else {
                alert("Goodnight and thank you for playing!");
                endGame();
            }
        } 
        else if (guessesCounter === 0 && musicalsList[4] === musicalPickedWord) {
            musicalPic5="<img src=\"assets/images/phantom.jpg\" class=\"phantom1\" alt=\"Phantom\">";document.querySelector("#musicalPic").innerHTML = musicalPic5;
            musicalPic5a="<img src=\"assets/images/phantom2.jpg\" class=\"phantom2\" alt=\"Phantom\">";document.querySelector("#musicalPicb").innerHTML = musicalPic5a;
            contentReset();
            i = 0;
            if (confirm("The correct answer was 'Phantom Of The Opera'! Wanna keep playing?")) {
                pickRandomWord();
                guessingTheLetter(); }
            else {
                endGame();
                alert("Goodnight and thank you for playing!");
            }
        }
}
//------------------------------------------------------------------------------------------------------------------
//POINTS SYSTEM
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
                musicalPlaceholderArray[i] = musicalPickedWord[i];
                }
                lettersGuessedDom.textContent = "";
                pressAnyKeyDom.textContent = ""; 
                guessingTheLetter();
                contentReset();
        }
        pickRandomWord();
                
    if (wins === 10) {
        alert("Start spreading the news! You just won!!!! #UNSTOPPABLE");
        won();
    }
    }
}
//------------------------------------------------------------------------------------------------------------------
//USER EVENT
document.onkeyup = function(event) {
        // This function is run whenever the user presses a key for their user guess.
        userTypes = event.key.toLowerCase();
        // Determines which key was pressed.
            guessingTheLetter();
    }
//-----------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------
//WIN GAME
function won () {
    audioPauses ()
    superCali ="<iframe src=\"https://www.youtube.com/embed/AZnt-0fEiT0?rel=0;&autoplay=1\" class=\"video\"></iframe>";document.querySelector("#startvideoID").innerHTML = superCali;
    
    for (var i = 0; i < document.getElementsByTagName('img').length; i++) {
        document.getElementsByTagName('img')[i].style.display = 'none';
       }
       "none"
    }
//------------------------------------------------------------------------------------------------------------------
//END GAME
function endGame () {
    audioPauses ()
    soLong ="<iframe src=\"https://www.youtube.com/embed/Qy9_lfjQopU?rel=0;&autoplay=1\" class=\"video\"></iframe>";document.querySelector("#endvideoID").innerHTML = soLong;

    for (var i = 0; i < document.getElementsByTagName('img').length; i++) {
        document.getElementsByTagName('img')[i].style.display = 'none';
       }
       "none"
}
//To pause audio
function audioPauses () {
    memoryAudio.pause();
    phantomAudio.pause();
    iDreamedAudio.pause();
    dontCryAudio.pause();
    tomorrowAudio.pause();
}
//------------------------------------------------------------------------------------------------------------------
// RESET EVERYTHING:
function contentReset() {
    gameOn = true;
    messageLetterAlready.textContent = "";
    lettersGuessedDom.textContent = "";
    guessesCounter = 10;
    pressAnyKeyDom.textContent = "";
    turnSoundOnDom.textContent = "";
    musicalPlaceholderArray = [];
    correctGuessedLetterArray = [];
    incorrectGuessedLetterArray = [];
    guessesCounterDom.textContent = guessesCounter;  
}
//------------------------------------------------------------------------------------------------------------------
startGame();
pickRandomWord();
//------------------------------------------------------------------------------------------------------------------
