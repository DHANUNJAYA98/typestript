var Person2 = /** @class */ (function () {
    function Person2(name, age, middlename) {
        this.name = name;
        this.age = age;
        if (middlename) {
            this.middlename = middlename;
        }
    }
    Person2.prototype.getInfo = function () {
        return this.middlename ? "".concat(this.name, " ").concat(this.middlename, ",Age:").concat(this.age) : "".concat(this.name, ",Age:").concat(this.age);
    };
    return Person2;
}());
var p3 = new Person2("dhanunjaya", 22);
var p4 = new Person2("treesa", 22);
console.log(p3.getInfo());
console.log(p4.getInfo());
