const _ = require('lodash');

class Player {
  static ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "Q", "K", "J"];

  static get VERSION() {
    return '0.1';
  }

  static me(gameState) {
    return _.find(gameState.players, player => player.name == 'Texas Nodem');
  }

  static onlyFigures(cards) {
    return _.every(cards, card => Player.ranks.indexOf(card.rank) > 7);
  }

  static betRequest(gameState, bet) {
    console.log(JSON.stringify(gameState));
    try {
      const me = Player.me(gameState);
      const cards = me.hole_cards;
      
      if (Player.onlyFigures(cards)) {
        console.log("round ", gameState.round, " : ", "onlyFigures");
        bet(5000);
      } else {
        console.log("round ", gameState.round, " : ", "NOT onlyFigures");
        bet(0);
      }
    } catch (e) {
      console.log("round ", gameState.round, " : ", "ERROR", e);
      bet(5000);
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
