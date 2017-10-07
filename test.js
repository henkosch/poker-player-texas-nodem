const poker = require('./poker');
const chai = require('chai');

describe('Poker', () => {
    describe('#isFlush()', () => {
        it('True for flush', () => {
            chai.assert.isTrue(
                poker.isFlush([
                    {
                        "rank": "4",
                        "suit": "spades"
                    },
                    {
                        "rank": "A",
                        "suit": "spades"
                    },
                    {
                        "rank": "6",
                        "suit": "spades"
                    },
                    {
                        "rank": "8",
                        "suit": "spades"
                    },
                    {
                        "rank": "Q",
                        "suit": "spades"
                    },
                ]
            ));
        });
        it('False for not flush', () => {
            chai.assert.isFalse(
                poker.isFlush([
                    {
                        "rank": "4",
                        "suit": "spades"
                    },
                    {
                        "rank": "A",
                        "suit": "clubs"
                    },
                    {
                        "rank": "6",
                        "suit": "spades"
                    },
                    {
                        "rank": "8",
                        "suit": "spades"
                    },
                    {
                        "rank": "Q",
                        "suit": "spades"
                    }
                ]
            ));
        });
        it('False for too few cards', () => {
            chai.assert.isFalse(
                poker.isFlush([
                    {
                        "rank": "4",
                        "suit": "spades"
                    },
                    {
                        "rank": "6",
                        "suit": "spades"
                    },
                    {
                        "rank": "8",
                        "suit": "spades"
                    },
                    {
                        "rank": "Q",
                        "suit": "spades"
                    }
                ]
            ));
        });
    });
});
