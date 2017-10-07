class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    let betAmount = 0;
    if (gameState.round > 2) {
      betAmount = 1000;
    }
    bet(betAmount);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
