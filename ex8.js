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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Good morning, Mr. ".concat(this.name);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, studentId) {
        var _this = _super.call(this, name, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.getStudentInfo = function () {
        return "Student Name: [Private], Age: ".concat(this.age, ", ID: ").concat(this.studentId);
    };
    return Student;
}(Person));
var person1 = new Person("dhanunjaya", 22);
console.log(person1.greet()); // Good morning, Mr. John Doe
// Attempt to access private and protected properties
//console.log(person1.name); // Error: Property 'name' is private and only accessible within class 'Person'
// console.log(person1.age);  // Error: Property 'age' is protected and only accessible within class 'Person' and its subclasses
var student = new Student("dhanunjaya", 22, 10017);
console.log(student.getStudentInfo());
// Output: Student Name: [Private], Age: 20, ID: 12345
