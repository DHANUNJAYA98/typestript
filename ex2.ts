/*
class Player {
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

class Batsman extends Player {
    runsScored: number;
    battingAverage: number;

    constructor(name: string, age: number, isCaptain: boolean, runsScored: number, battingAverage: number) {
        super(name, age, isCaptain);
        this.runsScored = runsScored;
        this.battingAverage = battingAverage;
    }

    getPlayerInfo(): string {
        const playerInfo = super.getPlayerInfo();
        return `${playerInfo}, Runs Scored: ${this.runsScored}, Batting Average: ${this.battingAverage}`;
    }
}
interface IBowler{
    wicketsTaken:number;
    bowlingAverage:number;
}
class Bowler extends Player implements IBowler{
    wicketsTaken: number;
    bowlingAverage: number;
    constructor(name: string, age: number, isCaptain: boolean, wicketsTaken: number, bowlingAverage: number) {
        super(name, age, isCaptain); 
        this.wicketsTaken = wicketsTaken;
        this.bowlingAverage = bowlingAverage;
      }
      getPlayerInfo(): string {
        const playerInfo = super.getPlayerInfo();
        return `${playerInfo}, Wickets Taken: ${this.wicketsTaken}, Bowling Average: ${this.bowlingAverage}`;
      }
}
const player1 = new Player("Tilak", 22);
const player2 = new Player("SKY", 32, true);
const batsman = new Batsman("Rohit", 36, true, 12000, 55.8);
const bowler=new Bowler("bumrah",29,false,320,23.6);
console.log(player1.getPlayerInfo()); 
console.log(player2.getPlayerInfo()); 
console.log(batsman.getPlayerInfo()); 
console.log(bowler.getPlayerInfo());
*/