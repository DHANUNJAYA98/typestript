export default class Player {
    name: string;
    age: number;
    isCaptain: boolean;

    constructor(name: string, age: number, isCaptain: boolean = false) {
        this.name = name;
        this.age = age;
        this.isCaptain = isCaptain;
    }

    getPlayerInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}, Captain: ${this.isCaptain ? "Yes" : "No"}`;
    }
}

