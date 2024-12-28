import Player from './exp';
export default class Batsman extends Player {
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
