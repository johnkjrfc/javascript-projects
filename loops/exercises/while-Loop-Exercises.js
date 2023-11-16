//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const readline = require('readline-sync');
const input = require('readline-sync')

let startingFuelLvl = "";
let astronautsAboard = "";
let altitudeReached = 0 

lcShuttle = [startingFuelLvl, astronautsAboard, altitudeReached]

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */


while (true) {
  startingFuelLvl =  input.question("what is the starting fuel level? :  ");

  if (startingFuelLvl >= 5000 && startingFuelLvl <= 30000) {
    console.log("Fuel level is in a valid range");
    break;
  } else {
    console.log("Check fuel, invalid entry");
  }
}



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
while (true) {
  astronautsAboard = input.question("How many crew members are aboard? : ");
  
  if (astronautsAboard < 8) {
    console.log("Crew capacity not exceeded");
    break;
  } else {
    console.log("Crew capacity exceeded.")
  }
}
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (startingFuelLvl > 0) {
  startingFuelLvl -= 100 * astronautsAboard;

  altitudeReached +=50;

  if (startingFuelLvl <= 0) {
    console.log("Fuel depleted. terminal altitude of " + altitudeReached + " kilometers")
    break;
  }
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`Shuttle gained ${altitudeReached} kilometers`)

if (altitudeReached >= 2000) {
  console.log("Orbit achieved");
} else {
  console.log("Shuttle failed to reach orbit")
}