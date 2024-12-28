"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Team = /** @class */ (function () {
    function Team() {
        this.players = [];
    }
    Team.prototype.addPlayer = function (player) {
        this.players.push(player);
    };
    Team.prototype.listPlayers = function () {
        console.log("Team players");
        this.players.forEach(function (player, index) {
            console.log("".concat(index + 1, ".").concat(player.getPlayerInfo()));
        });
    };
    return Team;
}());
exports.default = Team;
