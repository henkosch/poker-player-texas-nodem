class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    try {
      let betAmount = 0;
      if (gameState.round > 2) {
        betAmount = 1000;
      }
      bet(betAmount);
    } catch (e) {
      bet(5000);
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
