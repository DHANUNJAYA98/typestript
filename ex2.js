var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Batsman = /** @class */ (function (_super) {
    __extends(Batsman, _super);
    function Batsman(name, age, isCaptain, runsScored, battingAverage) {
        var _this = _super.call(this, name, age, isCaptain) || this;
        _this.runsScored = runsScored;
        _this.battingAverage = battingAverage;
        return _this;
    }
    Batsman.prototype.getPlayerInfo = function () {
        var playerInfo = _super.prototype.getPlayerInfo.call(this);
        return "".concat(playerInfo, ", Runs Scored: ").concat(this.runsScored, ", Batting Average: ").concat(this.battingAverage);
    };
    return Batsman;
}(Player));
var Bowler = /** @class */ (function (_super) {
    __extends(Bowler, _super);
    function Bowler(name, age, isCaptain, wicketsTaken, bowlingAverage) {
        var _this = _super.call(this, name, age, isCaptain) || this;
        _this.wicketsTaken = wicketsTaken;
        _this.bowlingAverage = bowlingAverage;
        return _this;
    }
    Bowler.prototype.getPlayerInfo = function () {
        var playerInfo = _super.prototype.getPlayerInfo.call(this);
        return "".concat(playerInfo, ", Wickets Taken: ").concat(this.wicketsTaken, ", Bowling Average: ").concat(this.bowlingAverage);
    };
    return Bowler;
}(Player));
var player1 = new Player("Tilak", 22);
var player2 = new Player("SKY", 32, true);
var batsman = new Batsman("Rohit", 36, true, 12000, 55.8);
var bowler = new Bowler("bumrah", 29, false, 320, 23.6);
console.log(player1.getPlayerInfo());
console.log(player2.getPlayerInfo());
console.log(batsman.getPlayerInfo());
console.log(bowler.getPlayerInfo());
