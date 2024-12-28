/*Define an interface IBowler with properties wicketsTaken and bowlingAverage.
 Ensure that a new class Bowler implements this interface and the Player class. */
import Player from './exp';
 interface IBowler{
    wicketsTaken:number;
    bowlingAverage:number;
}
export default class Bowler extends Player implements IBowler{
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