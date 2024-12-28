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
var exp_1 = require("./exp");
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
}(exp_1.default));
exports.default = Batsman;
