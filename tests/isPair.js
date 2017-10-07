const poker = require('../poker');
const chai = require('chai');

module.exports = function() {
    describe('Poker', () => {
        describe('#isPair()', () => {
            it('True for pair', () => {
                chai.assert.isTrue(
                    poker.isPair([
                        {
                            "rank": "4",
                            "suit": "diamonds"
                        },
                        {
                            "rank": "4",
                            "suit": "spades"
                        }
                    ]
                ));
            });
            it('False for non-pair', () => {
                chai.assert.isFalse(
                    poker.isPair([
                        {
                            "rank": "4",
                            "suit": "diamonds"
                        },
                        {
                            "rank": "A",
                            "suit": "spades"
                        }
                    ]
                ));
            });
            it('True only for pair in hands', () => {
                chai.assert.isFalse(
                    poker.isPair([
                        {
                            "rank": "4",
                            "suit": "diamonds"
                        },
                        {
                            "rank": "8",
                            "suit": "spades"
                        },
                        {
                            "rank": "A",
                            "suit": "clubs"
                        },
                        {
                            "rank": "4",
                            "suit": "hearts"
                        },
                        {
                            "rank": "Q",
                            "suit": "spades"
                        },
                    ]
                ));
            });
        });
    });
};
