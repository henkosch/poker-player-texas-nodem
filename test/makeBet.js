const poker = require('../poker');
const chai = require('chai');

describe('Poker', () => {
    describe('#makeBet()', () => {
        it('Make bet pre flop', () => {
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
                    "current_buy_in": 10
                },
                (bet) => {
                    return bet;
                }
            );
            chai.assert.equal(20, result);
        });

        it('Make bet post flop', () => {
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
                                    "rank": "2",
                                    "suit": "diamonds"
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
                    "community_cards": [
                        {
                            "rank": "2",
                            "suit": "hearts"
                        },
                        {
                            "rank": "3",
                            "suit": "diamonds"
                        },
                        {
                            "rank": "4",
                            "suit": "hearts"
                        }
                    ],
                    "current_buy_in": 10
                },
                (bet) => {
                    return bet;
                }
            );
            chai.assert.equal(20, result);
        });
    });
});
