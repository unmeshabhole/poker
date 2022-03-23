const hands = require("./utils/handsCompare");
const file = require("./utils/file");

//Reading cards for all games from the input txt file
const contents = file.readFile("./poker-exercise.txt", "utf8");

//Create list of game cards
const splitLines = (multiLineText) => multiLineText.split(/\r?\n/);
const pokerHands = splitLines(contents);

// Initialise
let player1WonHands = 0;
let player2WonHands = 0;

//
pokerHands.map((pokerHand) => {
  const cards = pokerHand.split(" "); // Split into cards
  var player1Cards = cards.splice(0, 5);
  var player2Cards = cards.slice(-5);

  var result = hands.compareHands(player1Cards, player2Cards);
  console.log(result);
  if (result === "WIN") {
    player1WonHands++;
  } else {
    player2WonHands++;
  }
});

console.log("Player 1: " + player1WonHands + " hands");
console.log("Player 2: " + player2WonHands + " hands");
