var computerGuess = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var wins = 0;
var losses = 0;
var usedLetters = [];
var gleft = 7;
var letterToGuess;

function guessLeft() {
    document.querySelector("#guess-left").innerHTML = gleft;
}

function newLetter() {
  letterToGuess =
    computerGuess[Math.floor(Math.random() * computerGuess.length)];
}

function oldLetters() {
    document.querySelector("#old-letters").innerHTML = usedLetters;
}


function startGame() {
  usedLetters = [];
  gleft = 7;
  newLetter();
    guessLeft();
    oldLetters();
  console.log(letterToGuess);
}
guessLeft();
newLetter();
console.log(letterToGuess);

document.onkeyup = function(event) {
  var playerGuess = event.key;

  function doubleCheck(arr) {

    for(i = 0; i < arr.length; i++) {
      console.log(arr)
      console.log(playerGuess)
        // if (arr[i] === playerGuess){ 
        //     alert("You have guessed this already");
        // }
    
  }


}

  gleft--;
  usedLetters.push(playerGuess);

  guessLeft();
  oldLetters();
  doubleCheck(usedLetters);

  if (playerGuess === letterToGuess) {
    wins++;
    document.querySelector("#wins-count").innerHTML = wins;
    startGame();
  }

  if (gleft === 0) {
    losses++;
    document.querySelector("#loss-count").innerHTML = losses;
    startGame();
  }


};
