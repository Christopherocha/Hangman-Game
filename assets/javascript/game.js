var remainingGuesses = 10;
var lettersGuessed = [];
var wrongLetters = [];


var acceptedKeys = "abcdefghijklmnopqrstuvwxyz";
var wordBank = ["HOT FUZZ", "LETHAL WEAPON", "DIE HARD", "BAD BOYS", "TRUE LIES", "TEAM AMERICA", "THE LONG KISS GOODNIGHT", "PREDATOR"];
var currentWord = "";

document.onkeyup = function(event) {
    userKey = event.key;
    if (accepteptedKeys.indexOf(userKey) > -1) {
    	game.evaluateInput(userKey);
    } else {
    	alert("This game only accepts letters, and you pressed the " key + " key.")
    }
}

var game = {
	setup: function(){
		var splitToArr = currentWord.split(" ");
		var output = "";

		for (var i = 0; i < splitToArr.length; i++) {
			output = output + this.wordSetup(splitToArr[i].length) + " ";
		}

		var characterCount = currentWord.replace(/\s/g, "");
	}
	wordSetup: function(length){
		var hyphens = "";

		for (var i = 0; i < length; i++) {
			hyphens = hyphens + "-";
		}

		return hyhens;

	}
	evaluateInput: function(key) {
		if (lettersGuessed.indexOf(key) = -1) {

			if (currentWord.indexOf(key) > -1) {
				this.correctAnswer(key);

			} else {
				wrongLetters.push(key);
				this.wrongAnswer(key);

			}

			lettersGuessed.push(key);
			remainingGuesses -= 1;

		} else {
			//logic to alert user that this key was already used

		}
	}

	correctAnswer: function(key){
		var letterIndex = currentWord.indexOf(key);

	}

	wrongAnswer: function(key){
		//logic display this new letter in the wrong answers array

	}

	gameOver:
}