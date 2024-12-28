import Player from './exp';
import Batsman from './ex3';
import Bowler from './ex4';
import Team from './ex6';
const player=new Player("virat",35,true);
const batsman=new Batsman("rohit sharma",36,false,15000,50.5);
const bowler=new Bowler("bumrah",29,false,320,24.6);
const team=new Team();
team.addPlayer(player);
team.addPlayer(batsman);
team.addPlayer(bowler);
//console.log(player.getPlayerInfo());
//console.log(batsman.getPlayerInfo());
//console.log(bowler.getPlayerInfo());
team.listPlayers();


