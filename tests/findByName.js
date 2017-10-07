const poker = require('../poker');
const chai = require('chai');

module.exports = function () {
    describe('Poker', () => {
        describe('#isPair()', () => {
            it('Find Sneaky', () => {
                chai.assert.equal(
                    { "name": "Sneaky", "stack": 0, "status": "out", "bet": 0, "time_used": 394572, "version": "Default Python folding player", "id": 1 },
                    poker.findMe(
                        { "tournament_id": "59ca433b77fe0f0004000002", "game_id": "59d8c465f83d70000400012f", "round": 21, "players": [{ "name": "Friendly Dog", "stack": 961, "status": "folded", "bet": 0, "time_used": 225897, "version": "Default PHP folding player", "id": 0 }, , { "name": "Texas Nodem", "stack": 2902, "status": "active", "bet": 0, "hole_cards": [{ "rank": "2", "suit": "hearts" }, { "rank": "3", "suit": "spades" }], "time_used": 240294, "version": "0.1", "id": 2 }, { "name": "Always all in", "stack": 953, "status": "active", "bet": 5, "time_used": 270218, "version": "haha we always all in xD", "id": 3 }, { "name": "GOgliG", "stack": 169, "status": "active", "bet": 10, "time_used": 316599, "version": "High rollers lol", "id": 4 }], "small_blind": 5, "big_blind": 10, "orbits": 4, "dealer": 2, "community_cards": [], "current_buy_in": 10, "pot": 15, "in_action": 2, "minimum_raise": 5, "bet_index": 4 }
                    ));
            });
        });
    });
};
