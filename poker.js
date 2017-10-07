const _ = require('lodash');

const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

function findMe(gameState) {
    return _.find(gameState.players, player => player.name == 'Texas Nodem');
}

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

function isAcePair(cards) {
    return isPair(cards) && cards[0].rank == "A";
}

function onlyFigures(cards) {
    return _.every(cards, card => ranks.indexOf(card.rank) > 7);
}

function allCards(gameState) {
    const myCards = findMe(gameState).hole_cards;
    return gameState.community_cards.concat(myCards);
}

function isFlush(cards) {
    let hash = {};
    cards.forEach(card => {
        if (hash[card.rank]) hash[card.rank]++;
        else hash[card.rank] = 1;
    });
    for (let rank in hash) {
        if (hash[rank] >= 5) return true;
    }
    return false;
}

function makeBet(gameState, bet) {
    const me = findMe(gameState);
    console.log("ME", me);

    const cards = me.hole_cards;
    const playerCount = gameState.players.length;

    console.log("--- VARIABLES ---");

    if (onlyFigures(cards)) console.log("round ", gameState.round, " : ", "onlyFigures");
    if (isPair(cards)) console.log("round ", gameState.round, " : ", "isPair");
    if (sameColor(cards)) console.log("round ", gameState.round, " : ", "sameColor");
    if (isNeighbors(cards)) console.log("round ", gameState.round, " : ", "isNeighbors");
    if (isAcePair(cards)) console.log("round ", gameState.round, " : ", "isAcePair");
    console.log("round ", gameState.round, " : ", "playerCount", playerCount);

    console.log("--- DECIDE ---");

    if (onlyFigures(cards) || isPair(cards) || (sameColor(cards) && isNeighbors(cards))) {
        if (playerCount <= 3 || isAcePair(cards)) {
            console.log("round ", gameState.round, " : ", "ALL in");
            bet(5000);
        } else {
            console.log("round ", gameState.round, " : ", "WAITING for player count");
            bet(0);
        }
    } else {
        console.log("round ", gameState.round, " : ", "NOT good");
        bet(0);
    }
}

module.exports = {
    makeBet,
    isFlush,
    allCards,
    onlyFigures,
    isAcePair,
    isNeighbors,
    sameColor,
    isPair,
    findMe
};