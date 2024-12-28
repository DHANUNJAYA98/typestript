var Rectangle = /** @class */ (function () {
    function Rectangle(l, b) {
        this.l = l;
        this.b = b;
    }
    Rectangle.prototype.getArea = function () {
        return this.l * this.b;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.l + this.b);
    };
    return Rectangle;
}());
var circle = /** @class */ (function () {
    function circle(r) {
        this.r = r;
    }
    circle.prototype.getArea = function () {
        return Math.PI * this.r * this.r;
    };
    circle.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.r;
    };
    return circle;
}());
var r1 = new Rectangle(10, 20);
var p1 = new circle(5);
console.log(r1.getArea());
console.log(r1.getPerimeter());
console.log(p1.getArea());
console.log(p1.getPerimeter());
