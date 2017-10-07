const poker = require('../poker');
const chai = require('chai');

describe('Poker', () => {
    describe('#decide()', () => {
        it('Ace pair', () => {
            chai.assert.deepEqual(
                {
                    action: 'allIn',
                    strategy: 'acePair'
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
                                        "rank": "A",
                                        "suit": "hearts"
                                    },
                                    {
                                        "rank": "A",
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
