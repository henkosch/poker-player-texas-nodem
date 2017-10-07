const poker = require('../poker');
const chai = require('chai');

describe('Poker', () => {
    describe('#decide()', () => {
        it('Concrete', () => {
            chai.assert.deepEqual(
                {
                    action: 'allIn',
                    strategy: 'pair'
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
                                "status": "out"
                            },
                            {
                                "name": "Texas Nodem",
                                "status": "active",
                                "hole_cards": [
                                    {
                                        "rank": "8",
                                        "suit": "hearts"
                                    },
                                    {
                                        "rank": "8",
                                        "suit": "spades"
                                    }
                                ]
                            },
                            {
                                "name": "Always all in",
                                "status": "active"
                            },
                            {
                                "name": "GOgliG",
                                "status": "out"
                            }
                        ],
                        "community_cards": [],
                    }
                )
            );
        });
    });
});
