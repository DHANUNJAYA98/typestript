"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/*Define an interface IBowler with properties wicketsTaken and bowlingAverage.
 Ensure that a new class Bowler implements this interface and the Player class. */
var exp_1 = require("./exp");
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
}(exp_1.default));
exports.default = Bowler;
