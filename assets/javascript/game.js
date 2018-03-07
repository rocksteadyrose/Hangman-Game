

var words = ["i dreamed a dream", "tomorrow", "dont cry for me argentina"];

        
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
            // Determines which key was pressed.
            var userGuess = event.key;

            // PICK RANDOM WORD FROM ARRAY. This rounds a number DOWNWARDS to the nearest integer, and returns the result from within that array.
            var randomWord = words[Math.floor(Math.random() * words.length)];
                               
            // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.             
            // Select the div with the id "demo", and insert the following HTML into it.
            document.getElementById("demo").innerHTML = userGuess;

            // 'EMPTY LETTER ANSWERS ARRAY': An array with empty letters to match the number of empty letters in the word. The for loop creates a looping variable that goes up to (but doesn't include) words.length. Each time around the loop, we add a new element to the ANSWERS array that will be the same length as randomWord. When the loop finishes, the ANSWERS array will be the same length as randomWord but will just be blanks.
            var answerArray = [];
            for (var i = 0; i < randomWord.length; i++) {
            answerArray[i] = "_";


            while (remainingLetters > 0) {

            //Update the ANSWER ARRAY according to the guess, so we add this code to the else statement:
            for (var j = 0; j < words.length; j++) {
                if (words[j] === userGuess) {
                    answerArray[j] = guess;
                    remainingLetters--;
                }
            }

        // This is a variable of the remaining letters, and it's the same length as the word the user is trying to guess. Each time they guess correctly, this value/length is reduced by one to coincide with the letter in the word.
        var remainingLetters = words.length;
    }
    }