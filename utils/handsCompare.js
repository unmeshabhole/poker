const handDetails = require("./handDetails");

function compareHands(player1Cards, player2Cards) {
  let player1 = handDetails.getHandDetails(player1Cards);
  let player2 = handDetails.getHandDetails(player2Cards);

  console.log(player1);
  console.log(player2);
  if (player1.rank === player2.rank) {
    if (player1.value < player2.value) {
      return "WIN";
    } else if (player1.value > player2.value) {
      return "LOSE";
    } else {
      return "DRAW";
    }
  }
  return player1.rank < player2.rank ? "WIN" : "LOSE";
}

module.exports = { compareHands };
