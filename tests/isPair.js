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
        });
    });
};
