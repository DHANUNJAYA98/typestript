var Person = /** @class */ (function () {
    function Person(nickname) {
        this.nickname = nickname;
    }
    // Greet function with an optional name parameter
    Person.prototype.greet = function (name) {
        if (name) {
            console.log("Hello, ".concat(name).concat(this.nickname ? " (" + this.nickname + ")" : "", "!"));
        }
        else {
            console.log("Hello, Everyone!");
        }
    };
    // Hobbies method with an optional hobbies array parameter
    Person.prototype.hobbies = function (hobbyList) {
        if (hobbyList && hobbyList.length > 0) {
            console.log("Hobbies: " + hobbyList.join(", "));
        }
        else {
            console.log("No hobbies provided.");
        }
    };
    return Person;
}());
// Example usage
var person1 = new Person("Ace");
person1.greet(); // Outputs: Hello, Everyone!
person1.greet("John"); // Outputs: Hello, John (Ace)!
person1.hobbies(["Reading", "Swimming", "Hiking"]); // Outputs: Hobbies: Reading, Swimming, Hiking
person1.hobbies(); // Outputs: No hobbies provided.
var person2 = new Person();
person2.greet("Alex"); // Outputs: Hello, Alex!
person2.greet(); // Outputs: Hello, Everyone!
