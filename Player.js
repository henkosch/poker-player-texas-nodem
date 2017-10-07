const _ = require('lodash');

function findMe(gameState) {
  return _.find(gameState.players, player => player.name == 'Texas Nodem');
}

const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

function isPair(cards) {
  return cards[0].rank == cards[1].rank;
}

function sameColor(cards) {
  return cards[0].suit == cards[1].suit;
}

function isNeighbors(cards) {
  const index0 = ranks.indexOf(cards[0].rank);
  const index1 = ranks.indexOf(cards[1].rank);
  return Math.abs(index0 - index1);
}

function onlyFigures(cards) {
  return _.every(cards, card => ranks.indexOf(card.rank) > 7);
}

function makeBet(gameState, bet) {
  const me = findMe(gameState);
  console.log("ME", me);

  const cards = me.hole_cards;

  if (onlyFigures(cards)) console.log("round ", gameState.round, " : ", "onlyFigures");
  if (isPair(cards)) console.log("round ", gameState.round, " : ", "isPair");
  if (sameColor(cards)) console.log("round ", gameState.round, " : ", "sameColor");
  if (isNeighbors(cards)) console.log("round ", gameState.round, " : ", "isNeighbors");

  if (onlyFigures(cards) || isPair(cards) || (sameColor(cards) && isNeighbors(cards))) {
    console.log("round ", gameState.round, " : ", "all in");
    bet(5000);
  } else {
    console.log("round ", gameState.round, " : ", "NOT onlyFigures");
    bet(0);
  }
}

// -----

class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    console.log(JSON.stringify(gameState));
    try {
      makeBet(gameState, bet);
    } catch (e) {
      console.log("round ", gameState.round, " : ", "ERROR", e);
      bet(5000);
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
