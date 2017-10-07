const poker = require('../poker');
const chai = require('chai');

module.exports = function () {
    describe('Poker', () => {
        describe('#decide()', () => {
            it('Decide', () => {
                chai.assert.deepEqual(
                    {
                        action: 'allIn',
                        strategy: 'concrete'
                    },
                    poker.decide(
                        {
                            "tournament_id": "59ca433b77fe0f0004000002",
                            "game_id": "59d8c889f83d700004000164",
                            "round": 18,
                            "players": [
                                {
                                    "name": "Friendly Dog",
                                    "stack": 970,
                                    "status": "active",
                                    "bet": 6,
                                    "time_used": 7186057,
                                    "version": "Default PHP folding player",
                                    "id": 0
                                },
                                {
                                    "name": "Sneaky",
                                    "stack": 0,
                                    "status": "out",
                                    "bet": 0,
                                    "time_used": 628119,
                                    "version": "Default Python folding player",
                                    "id": 1
                                },
                                {
                                    "name": "Texas Nodem",
                                    "stack": 3068,
                                    "status": "active",
                                    "bet": 0,
                                    "hole_cards": [
                                        {
                                            "rank": "8",
                                            "suit": "hearts"
                                        },
                                        {
                                            "rank": "8",
                                            "suit": "spades"
                                        }
                                    ],
                                    "time_used": 392465,
                                    "version": "0.1",
                                    "id": 2
                                },
                                {
                                    "name": "Always all in",
                                    "stack": 953,
                                    "status": "active",
                                    "bet": 3,
                                    "time_used": 341074,
                                    "version": "haha we always all in xD",
                                    "id": 3
                                },
                                {
                                    "name": "GOgliG",
                                    "stack": 0,
                                    "status": "out",
                                    "bet": 0,
                                    "time_used": 211050,
                                    "version": "High rollers lol",
                                    "id": 4
                                }
                            ],
                            "small_blind": 3,
                            "big_blind": 6,
                            "orbits": 3,
                            "dealer": 2,
                            "community_cards": [

                            ],
                            "current_buy_in": 6,
                            "pot": 9,
                            "in_action": 2,
                            "minimum_raise": 3,
                            "bet_index": 4
                        }
                    )
                );
            });
        });
    });
};
