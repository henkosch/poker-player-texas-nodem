const poker = require('../poker');
const chai = require('chai');

describe('Poker', () => {
    describe('#cardSum()', () => {
        it('sums cards', () => {
            const result = poker.cardSum([{
                rank: "3"
            }, {
                rank: "4"
            }]);
            chai.assert.equal(3, result);
        });
    });
});
