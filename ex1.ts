/*Ex - 1
Define basic types for a Player. Include properties for:
 
name (string)

age (number)

isCaptain (boolean, default to false)
 


 */

type player = {
    name: string;
    age: number;
    isCaptain: boolean;
  };
  
  let play1: player = {
    name: "Tilak Varma",
    age: 22,
    isCaptain: false, 
  };
  play1.isCaptain = true;
  
  console.log(`${play1.name} is ${play1.age} years old. Captain: ${play1.isCaptain ? "Yes" : "No"}`);
  