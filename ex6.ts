import Player from './exp';

export default class Team{
   private players:Player[]=[];
   addPlayer(player:Player):void{
     this.players.push(player);
   }
   listPlayers():void{
     console.log("Team players");
     this.players.forEach((player,index)=>{
        console.log(`${index+1}.${player.getPlayerInfo()}`);

     })
   }
}