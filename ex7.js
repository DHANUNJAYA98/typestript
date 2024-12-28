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
// Define the Person class
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
// Define the Student class that extends Person
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, studentId) {
        var _this = _super.call(this, name, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    // Override greet to include studentId
    Student.prototype.greet = function () {
        return "Good morning, Mr. ".concat(this.name, ". Your student ID is ").concat(this.studentId, ".");
    };
    return Student;
}(Person));
// Define the GraduateStudent class that extends Student
var GraduateStudent = /** @class */ (function (_super) {
    __extends(GraduateStudent, _super);
    function GraduateStudent(name, age, studentId, degree) {
        var _this = _super.call(this, name, age, studentId) || this;
        _this.degree = degree;
        return _this;
    }
    GraduateStudent.prototype.greet = function () {
        return "".concat(_super.prototype.greet.call(this), " You have a degree in ").concat(this.degree, ".");
    };
    return GraduateStudent;
}(Student));
var person1 = new Person("dhanunjaya", 21);
console.log(person1.greet());
var student = new Student("dhanunjaya", 21, 10017);
console.log(student.greet());
var gradStudent = new GraduateStudent("dhanunjaya", 21, 10017, "Computer Science");
console.log(gradStudent.greet());
