const _ = require('lodash');

function findMe(gameState) {
  return _.find(gameState.players, player => player.name == 'Texas Nodem');
}

const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "Q", "K", "J"]
const figures = ["A", "Q", "K", "J"];

function isPair(cards) {
  return cards[0].rank == cards[1].rank;
}

function onlyFigures(cards) {
  return _.every(cards, card => ranks.indexOf(card.rank) > 7);
}

class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    console.log(JSON.stringify(gameState));
    try {
      const me = findMe(gameState);
      console.log("ME", me);

      const cards = me.hole_cards;

      if (onlyFigures(cards) || isPair(cards)) {
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
