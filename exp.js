"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player(name, age, isCaptain) {
        if (isCaptain === void 0) { isCaptain = false; }
        this.name = name;
        this.age = age;
        this.isCaptain = isCaptain;
    }
    Player.prototype.getPlayerInfo = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Captain: ").concat(this.isCaptain ? "Yes" : "No");
    };
    return Player;
}());
exports.default = Player;
