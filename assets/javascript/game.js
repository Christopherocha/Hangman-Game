var acceptedKeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var wordBank = ["HOT FUZZ", "LETHAL WEAPON", "DIE HARD", "BAD BOYS", "TRUE LIES", "TEAM AMERICA", "THE LONG KISS GOODNIGHT", "PREDATOR", "TOTAL RECALL", "ESCAPE FROM LA", "BLOODSPORT", "DEATHWISH", "INDEPENDENCE DAY", "TRUE ROMANCE", "UNDER SEIGE"];
var currentWord = "";

var remainingGuesses = 10;
var lettersGuessed = "";
var wrongLetters = [];
var output = "";
var wins = 0;
var characterCount = 0;

document.onkeyup = function(event) {

    userKey = event.key.toUpperCase();
    if (remainingGuesses === 10) {
        document.getElementById("panel-heading").innerText = "Press any letter to continue playing";
    }
    if (acceptedKeys.indexOf(userKey) > -1) {
        game.evaluateInput(userKey);
    } else {
        alert("This game only accepts letters, and you pressed the " + userKey + " key.")
    }
}

var game = {
    setup: function(){
        chosenWord = this.chooseWord(wordBank);
        console.log(chosenWord);
        characterCount = chosenWord.replace(/\s/g, "").length;
        output = this.wordSetup(chosenWord);
        this.printWord(output);
        this.updateChances();
        currentWord = chosenWord;
        return chosenWord;
    },
    chooseWord: function(){
        var word = wordBank[Math.floor(Math.random() * wordBank.length)];
        return word;
    },
    wordSetup: function(arr){
        var hyphens = "";
        var wordContent = document.getElementById("word");

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === " ") {
                hyphens = hyphens + "\n";
            } else {
            hyphens = hyphens + "_";
            }
        }

        return hyphens;

    },
    printWord: function(word){
        var nodeText = word;


        var div = document.getElementById("word-content");

        div.innerHTML = nodeText;
    },
    evaluateInput: function(key){
        if (lettersGuessed.indexOf(key) < 0) {

            if (currentWord.indexOf(key) > -1) {
                this.updateIndex(key);

            } else {
                this.wrongAnswer(key);

            }

            lettersGuessed = lettersGuessed + key;
            remainingGuesses -= 1;

        } 
        this.updateChances();
    },

    wrongAnswer: function(key){
        wrongLetters.push(key);
        this.updateLetters();

    },
    updateIndex: function(key){
        var count = 0;
        var pos = 0;

        while (chosenWord.indexOf(key, count) > -1) {
          var pos = chosenWord.indexOf(key, count)
          output = output.substring(0, pos) + key + output.substring(pos + 1);
          console.log(output);
          count = pos + 1;
          characterCount -= 1;
        }

        this.printWord(output);

        if (characterCount === 0) {
            wins += 1;
            this.updateWins();
            this.celebrateWin();
            // this.gameOver();
        }
    },
    updateLetters: function(){
        var nodeText = wrongLetters;
        var div = document.getElementById("guessed");
        div.innerText = nodeText;
    },
    updateChances: function() {
        var nodeText = remainingGuesses;
        var div = document.getElementById("chances");
        div.innerText = nodeText;
    },
    updateWins: function(){
        var nodeText = wins;
        var div = document.getElementById("wins");
        var newDiv = document.createElement("div");
        newDiv.innerText = nodeText;
        div.appendChild(newDiv);
    },
    celebrateWin: function() {
        var audio = new Audio('assets/yipee.mp3');
        audio.play();
        this.gameOver();
    },
    clearVariables: function(){
        currentWord = "";
        remainingGuesses = 10;
        lettersGuessed = "";
        wrongLetters = [];
        output = "";
        characterCount = 0;

    },
    gameOver: function() {
        
        this.clearVariables();
        this.setup();
        document.getElementById("panel-heading").innerText = "PRESS ANY KEY TO BEGIN!";
    },

}