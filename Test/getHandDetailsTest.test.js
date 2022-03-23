const hands = require("../utils/handsCompare");
const assert = require("assert");
describe("Test the Hands Compare", () => {
  it("should return WIN for player1 with Royal Flush", () => {
    const player1Cards = ["AH", "KH", "QH", "JH", "TH"];
    const player2Cards = ["1S", "3S", "5H", "7C", "9D"];

    const result = hands.compareHands(player1Cards, player2Cards);
    console.log(result);
    assert.equal(result, "WIN");
  });

  it("should return WIN for player1 with Straight Flush", () => {
    const player1Cards = ["4H", "5H", "6H", "7H", "8H"];
    const player2Cards = ["1S", "3S", "5H", "7C", "9D"];

    const result = hands.compareHands(player1Cards, player2Cards);
    console.log(result);
    assert.equal(result, "WIN");
  });

  it("should return WIN for player1 with Four of Kind", () => {
    const player1Cards = ["AH", "AC", "AD", "AS", "8H"];
    const player2Cards = ["1S", "3S", "5H", "7C", "9D"];

    const result = hands.compareHands(player1Cards, player2Cards);
    console.log(result);
    assert.equal(result, "WIN");
  });

  it("should return WIN for player1 with Full House", () => {
    const player1Cards = ["QH", "QC", "QD", "AS", "AH"];
    const player2Cards = ["1S", "3S", "5H", "7C", "9D"];

    const result = hands.compareHands(player1Cards, player2Cards);
    console.log(result);
    assert.equal(result, "WIN");
  });

  it("should return WIN for player1 with plain Flush", () => {
    const player1Cards = ["QH", "1H", "3H", "5H", "TH"];
    const player2Cards = ["1S", "3S", "5H", "7C", "9D"];

    const result = hands.compareHands(player1Cards, player2Cards);
    console.log(result);
    assert.equal(result, "WIN");
  });

  it("should return WIN for player1 with Three of Kind", () => {
    const player1Cards = ["AH", "AC", "AD", "2S", "8H"];
    const player2Cards = ["1S", "3S", "5H", "7C", "9D"];

    const result = hands.compareHands(player1Cards, player2Cards);
    console.log(result);
    assert.equal(result, "WIN");
  });

  it("should return WIN for player1 with Two Pairs", () => {
    const player1Cards = ["AH", "AC", "2D", "2S", "8H"];
    const player2Cards = ["1S", "3S", "5H", "7C", "9D"];

    const result = hands.compareHands(player1Cards, player2Cards);
    console.log(result);
    assert.equal(result, "WIN");
  });

  it("should return WIN for player1 with One Pair", () => {
    const player1Cards = ["AH", "AC", "3D", "2S", "8H"];
    const player2Cards = ["1S", "3S", "5H", "7C", "9D"];

    const result = hands.compareHands(player1Cards, player2Cards);
    console.log(result);
    assert.equal(result, "WIN");
  });

  it("should return WIN for player1 with High Hand", () => {
    const player1Cards = ["AH", "1S", "3S", "5H", "7C"];
    const player2Cards = ["1S", "3S", "5H", "7C", "9D"];

    const result = hands.compareHands(player1Cards, player2Cards);
    console.log(result);
    assert.equal(result, "WIN");
  });
});
