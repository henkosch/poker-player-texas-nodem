const poker = require('../poker');
const chai = require('chai');

describe('Poker', () => {
    describe('#decide()', () => {
        it('Expect straight flush', () => {
            chai.assert.deepEqual(
                {
                    action: 'allIn',
                    strategy: 'expectStraightFlush'
                },
                poker.decide(
                    {
                        "round": 18,
                        "players": [
                            {
                                "name": "Friendly Dog",
                                "status": "active"
                            },
                            {
                                "name": "Sneaky",
                                "status": "active"
                            },
                            {
                                "name": "Texas Nodem",
                                "status": "active",
                                "hole_cards": [
                                    {
                                        "rank": "7",
                                        "suit": "hearts"
                                    },
                                    {
                                        "rank": "8",
                                        "suit": "hearts"
                                    }
                                ]
                            }
                        ],
                        "community_cards": [],
                    }
                )
            );
        });
    });
});
