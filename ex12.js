/*Create a Stud class,
 write a method that uses an arrow function to
  print this.name in a setTimeout.
 */
var Stud = /** @class */ (function () {
    function Stud(name) {
        this.name = name;
    }
    Stud.prototype.printNameWithDelay = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.name);
        }, 1000);
    };
    return Stud;
}());
var student1 = new Stud("james");
student1.printNameWithDelay();
