var acceptedKeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var wordBank = ["HOT FUZZ", "LETHAL WEAPON", "DIE HARD", "BAD BOYS", "TRUE LIES", "TEAM AMERICA", "THE LONG KISS GOODNIGHT", "PREDATOR", "TOTAL RECALL", "ESCAPE FROM LA", "BLOODSPORT", "DEATHWISH", "INDEPENDENCE DAY", "TRUE ROMANCE"];
var currentWord = "";

var remainingGuesses = 10;
var lettersGuessed = "";
var wrongLetters = [];
var output = "";
var wins = 0;
var characterCount = 0;

document.onkeyup = function(event) {

    userKey = event.key.toUpperCase();
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

        // splitToArr = chosenWord.split("");
        //realStr = chosen;

        // for (var i = 0; i < splitToArr.length; i++) {
        //     output(this.wordSetup(splitToArr[i].length));
        // }
        // realArr = chosenWord.split(" ");
        // this.printWord(output);
        // output = this.wordSetup(splitToArr);
        output = this.wordSetup(chosenWord);

        this.printWord(output);

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
                hyphens = hyphens + ",";
            } else {
            hyphens = hyphens + "_";
            }
        }

        return hyphens;

    },
    printWord: function(word){
        var nodeText = "";

        for (var i = 0; i < word.length; i++) {
            nodeText = nodeText + word[i] + "\t";
        }
        var div = document.getElementById("word-content");
        // div.style.whitespace = "pre"
        div.innerText = nodeText;
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
    // correctAnswer: function(key){
    //     this.updateIndex(key); 
        
    // },
    wrongAnswer: function(key){
        wrongLetters.push(key);
        this.updateLetters();

    },
    updateIndex: function(key){

        // if (realArr.length > 1) {
        //     for (var i = 0; i < realArr.length; i++) {
        //         for (var j = 0; j < realArr[i].length; j++) {
        var count = 0;
        var pos = 0;

        while (chosenWord.indexOf(key, count) > -1) {
          var pos = chosenWord.indexOf(key, count)
          output = output.substring(0, pos) + key + output.substring(pos + 1);
          console.log(output);
          count = pos + 1;
          characterCount -= 1;
        }

        
                    //while (chosenWord.indexOf(key,))

                    
                    // if (realArr[i].charAt(j) === key) {
                    //     console.log("before: " + output);
                    //     output[i] = output[i].substring(0, j) + key + output[i].substring(j + 1);
                    //     console.log("middle: " + output);
                    //     output[i] = output[i].slice(j, -1);
                    //     console.log("after: " + output);
                    // }
                    //logic to update the word in that array index
                    //this.updateWord(indexArray, key);  Use replaceat js ****************
                // }

                // var regexp = new RegExp('[^ ']', 'g);

                // i = ;

            // }

        // } else {
        //     for (var j = 0; j < realArr.length; j++) {
        //        if (realArr[0].charAt(j) === key) {
        //             console.log("before: " + output);
        //             output[0] = output[0].substring(0, j) + key + output[0].substring(j , realArr[0].length - 1);
        //             console.log("after: " + output);
        //         }
        //     }
        // }

        this.printWord(output);

        if (characterCount === 0) {
            wins += 1;
            this.updateWins();
            this.gameOver();
        }
    },
    updateLetters: function(){
        var nodeText = wrongLetters;
        var div = document.getElementById("guessed");
        // div.style.whitespace = "pre"
        div.innerText = nodeText;
    },
    updateChances: function() {
        var nodeText = remainingGuesses;
        var div = document.getElementById("chances");
        // div.style.whitespace = "pre"
        div.innerText = nodeText;
    },
    updateWins: function(){
        var nodeText = wins;
        var div = document.getElementById("wins");
        // div.style.whitespace = "pre"
        div.innerText = nodeText;
    },
    celebrateWin: function() {

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
    },

}