const _ = require('lodash');

const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

function findByName(gameState, name) {
    return _.find(gameState.players, player => player.name == name);
}

function findMe(gameState) {
    return findByName(gameState, 'Texas Nodem');
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

function cardSum(cards) {
    return _.sum(cards.map(card => ranks.indexOf(card.rank)));
}

function isFlush(cards) {
    let hash = {};
    cards.forEach(card => {
        if (hash[card.suit]) hash[card.suit]++;
        else hash[card.suit] = 1;
    });
    for (let suit in hash) {
        if (hash[suit] >= 5) return true;
    }
    return false;
}

function decide(gameState) {
    console.log("--- DECIDE ---");

    const me = findMe(gameState);
    const cards = me.hole_cards;
    const playerCount = gameState.players.length;

    const sneaky = findByName(gameState, 'Sneaky');
    const sneakyActive = sneaky.status == "active";
    const kamikazeON = !sneakyActive;

    if (kamikazeON && gameState.minimum_raise > 20 && gameState.minimum_raise < 250) {
        return {
            action: "allIn",
            strategy: "kamikaze"
        };
    }

    if (sameColor(cards) && onlyFigures(cards)) {
        return {
            action: "allIn",
            strategy: "concrete"
        };
    }

    if (isPair(cards)) {
        const sum = cardSum(cards);
        if ((playerCount == 5 && sum > 16) ||
            (playerCount == 4 && sum > 16) ||
            (playerCount == 3 && sum > 0) ||
            (playerCount == 2 && sum > 0)) {
            return {
                action: "allIn",
                strategy: "pair"
            };
        }
    }

    if (sameColor(cards) && isNeighbors(cards) && playerCount <= 3) {
        return {
            action: "allIn",
            strategy: "expectFlush"
        };
    }

    if (isAcePair(cards)) {
        return {
            action: "allIn",
            strategy: "acePair"
        };
    }

    if (gameState.minimum_raise <= 20) {
        return {
            action: "call",
            strategy: "limp"
        };
    }

    return {
        action: "fold",
        strategy: "none"
    };
}

function makeBet(gameState, bet) {
    const decision = decide(gameState);

    console.log("round ", gameState.round, " : ", "action = ", decision.action, "strategy = ", decision.strategy);

    switch (decision.action) {
        case "allIn":
            return bet(5000);
        case "call":
            return bet(gameState.current_buy_in);
        case "fold":
        default:
            return bet(0);
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
    findMe,
    decide,
    findByName,
    cardSum
};