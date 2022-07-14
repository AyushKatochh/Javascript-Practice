'use strict';



const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*

 1. Create one player array for each team players1 and 2
 2. The first player in any player array is the goalkeeper and other are field players. For each Bayren Munich(1) create one variable ('gk')
      with the goalkeeper's name and one array ('fieldplayers') with all remaining 10 field players
 3. Create an array 'allPlayers' containing all of both teams.

4. During the game, Bayern Munich(team1) used 3 substitute players. So create
   a new array ('playersfinal') containing all the original team1 players plus 'Thiago', 'Coutinho', and 'Perisic' 

5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with 
   along with the number of goals who were scored (number of players names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win
   without using if else or ternary operator

8. Use players 'Davies' , 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again
   with players are game.scorerd
 */

//1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho',  'Perisic'];
console.log(players1Final);

//5.
// const {team1, x: draw, team2} = game.odds;
// console.log(team1, draw, team2);
//OR
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

//6.
const printGoals = function(...players) {
  console.log(`${players.length} goals were scored`);
}

// printGoals('Ayush', "Ayon", "Angelee", "Sanchi")

printGoals(...game.scored);

team1 < team2 && console.log("Team1 wins");
team1 > team2 && console.log("Team2 wins");
