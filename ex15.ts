/* 
Create an interface named CricketInfo and add the properties named bdate,age,avg,sr,runs,wickets, year with specific datatypes as per need,
 make sure that user can enter either string or number for years, should not be able to change
  the bdate and age, while avg and sr should be optional while assigning the values in the object which the user creates
   implementing the interface and then assign the values accordingly and display it.
 */
interface CricketInfo {
    readonly bdate: string;   // Birthdate (cannot be modified)
    readonly age: number;     // Age (cannot be modified)
    avg?: number;             // Batting average (optional)
    sr?: number;              // Strike rate (optional)
    runs: number;             // Runs scored
    wickets: number;          // Wickets taken
    year: string | number;    // Year, can be a string or a number
}

// Creating an object implementing the CricketInfo interface
const player: CricketInfo = {
    bdate: "1990-04-25", // Read-only
    age: 34,             // Read-only
    runs: 8000,          // Required
    wickets: 200,        // Required
    year: 2023           // Can be a string or a number
};

// Displaying the player details
console.log("Player Information:");
console.log(`Birthdate: ${player.bdate}`);
console.log(`Age: ${player.age}`);
console.log(`Runs: ${player.runs}`);
console.log(`Wickets: ${player.wickets}`);
console.log(`Year: ${player.year}`);

// Optional properties can be added if needed
player.avg = 50.3;   // Optional
player.sr = 85.5;    // Optional

// Displaying optional values if they exist
if (player.avg !== undefined) {
    console.log(`Batting Average: ${player.avg}`);
}
if (player.sr !== undefined) {
    console.log(`Strike Rate: ${player.sr}`);
}
