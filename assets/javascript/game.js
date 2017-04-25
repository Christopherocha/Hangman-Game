var acceptedKeys = "abcdefghijklmnopqrstuvwxyz";
var wordBank = ["HOT FUZZ", "LETHAL WEAPON", "DIE HARD", "BAD BOYS", "TRUE LIES", "TEAM AMERICA", "THE LONG KISS GOODNIGHT", "PREDATOR", "TOTAL RECALL", "ESCAPE FROM LA", "BLOODSPORT", "DEATHWISH", "INDEPENDENCE DAY", "TRUE ROMANCE"];
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];;

var remainingGuesses = 10;
var lettersGuessed = "";
var wrongLetters = [];

document.onkeyup = function(event) {

    userKey = event.key;
    if (acceptedKeys.indexOf(userKey) > -1) {
        game.evaluateInput(userKey);
    } else {
        alert("This game only accepts letters, and you pressed the " + userKey + " key.")
    }
}

var game = {
    setup: function(){
        chosenWord = this.chooseWord(wordBank);
        var characterCount = chosenWord.replace(/\s/g, "").length;

        var splitToArr = chosenWord.split(" ");
        var output = [];
        

        for (var i = 0; i < splitToArr.length; i++) {
            output.push(this.wordSetup(splitToArr[i].length));
        }
        this.printWord(output);

        return chosenWord;
    },
    chooseWord: function(){
        var word = wordBank[Math.floor(Math.random() * wordBank.length)];
        return word;
    },
    wordSetup: function(length){
        var hyphens = "";
        var wordContent = document.getElementById("word");

        for (var i = 0; i < length; i++) {
            hyphens = hyphens + "_ ";
        }

        return hyphens;

    },
    printWord: function(arr){
        var nodeText = "";

        for (var i = 0; i < arr.length; i++) {
            nodeText = nodeText + arr[i] + " ";
        }
        var para = document.createElement("p");
        var node = document.createTextNode(nodeText);
        para.appendChild(node);

        var element = document.getElementById("word-header");
        element.appendChild(para);
    },
    evaluateInput: function(key){
        if (lettersGuessed.indexOf(key) > -1) {

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
    },
    correctAnswer: function(key){
        var letterIndex = currentWord.indexOf(key);
        // Make sure to subtract from the variable that is keeping track of the remaining characters
    },
    wrongAnswer: function(key){
        //logic display this new letter in the wrong answers array

    }
    //gameOver:
}