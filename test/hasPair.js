const poker = require('../poker');
const chai = require('chai');

describe('Poker', () => {
    describe('#hasPair()', () => {
        it('True for pair', () => {
            chai.assert.equal(4, 
                poker.hasPair([
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
            chai.assert.isNull(
                poker.hasPair([
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
    });
});
