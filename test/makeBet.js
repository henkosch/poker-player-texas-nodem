const poker = require('../poker');
const chai = require('chai');

describe('Poker', () => {
    describe('#makeBet()', () => {
        it('Make bet', () => {
            const result = poker.makeBet(
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
                                    "rank": "K",
                                    "suit": "hearts"
                                },
                                {
                                    "rank": "Q",
                                    "suit": "hearts"
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
                },
                (bet) => {
                    return bet;
                }
            );
            chai.assert.equal(5000, result);
        });
    });
});
