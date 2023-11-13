// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below


let shuttleName = 'Determination';
let shuttleSpeedMph = 17500
let distMarsKm = 225000000
let distMoonKm = 384400
const miPerKm = 0.621

console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distMarsKm);
console.log(typeof distMoonKm);
console.log(typeof miPerKm);

let distMarsMi = distMarsKm * miPerKm;
console.log(distMarsMi);
let hoursToMars = distMarsMi / shuttleSpeedMph;
console.log(hoursToMars)
let daysToMars = hoursToMars / 24
console.log(daysToMars)
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars");