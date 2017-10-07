const poker = require('../poker');
const chai = require('chai');

describe('Poker', () => {
    describe('#hasStraight()', () => {
        it('true for hasStraight', () => {
            chai.assert.equal("4", 
                poker.hasStraight([
                    {
                        "rank": "2",
                        "suit": "hearts"
                    },
                    {
                        "rank": "3",
                        "suit": "hearts"
                    },
                    {
                        "rank": "4",
                        "suit": "hearts"
                    }
                ], 3
            ));
        });
    });
});
