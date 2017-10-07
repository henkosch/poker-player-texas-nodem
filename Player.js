const _ = require('lodash');

class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    try {
      const me = me(gameState);
      const cards = me.hole_cards;
      if (onlyFigures(cards)) { 
        bet(5000);
      } else {
        bet(0);
      }
    } catch (e) {
      bet(5000);
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

function me(gameState) {
  return _.find(gameState.players, player => player.name == 'Texas Nodem');
}

function onlyFigures(cards) {
  return _.every(cards, card => isNaN(parseInt(card.rank)) || card.rank == "10");
}