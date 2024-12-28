class Person {
    private nickname?: string;

    constructor(nickname?: string) {
        this.nickname = nickname;
    }

    // Greet function with an optional name parameter
    greet(name?: string): void {
        if (name) {
            console.log(`Hello, ${name}${this.nickname ? " (" + this.nickname + ")" : ""}!`);
        } else {
            console.log("Hello, Everyone!");
        }
    }

    // Hobbies method with an optional hobbies array parameter
    hobbies(hobbyList?: string[]): void {
        if (hobbyList && hobbyList.length > 0) {
            console.log("Hobbies: " + hobbyList.join(", "));
        } else {
            console.log("No hobbies provided.");
        }
    }
}

// Example usage
const person1 = new Person("Ace");
person1.greet();              // Outputs: Hello, Everyone!
person1.greet("John");         // Outputs: Hello, John (Ace)!
person1.hobbies(["Reading", "Swimming", "Hiking"]); // Outputs: Hobbies: Reading, Swimming, Hiking
person1.hobbies();             // Outputs: No hobbies provided.

const person2 = new Person();
person2.greet("Alex");         // Outputs: Hello, Alex!
person2.greet();               // Outputs: Hello, Everyone!
