const poker = require("./poker.js");

// -----

class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    console.log('gameState', JSON.stringify(gameState));
    try {
      poker.makeBet(gameState, bet);
    } catch (e) {
      console.log("round ", gameState.round, " : ", "ERROR", e);
      bet(5000);
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
