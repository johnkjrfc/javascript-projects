let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {
      return Math.round(Math.random() * 10)
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {
      return Math.round(Math.random() * 10)
   }
};

let chimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {
      return Math.round(Math.random() * 10)
   }
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {
      return Math.round(Math.random() * 10)
   }   
};  

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() {
      return Math.round(Math.random() * 10)  //Revisit this math
   }
};
//console.log(tardigrade.move())
// After you have created the other object literals, add the astronautID property to each one.


// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, chimpTwo, dog, tardigrade];
// Print out the relevant information about each animal.
function crewReports(crew) {
   for (item of crew)
      console.log(`${item.name} is a ${item.species}. They are ${item.age} years old and ${item.mass} kilograms. Their ID is ${item.astronautID}`)    
}

//crewReports(crew)

function crewReports2(crew) {
   console.log("\nCrew Report 2")
   for (let index in crew) {
      let crewName = crew[index]
      console.log(`${crewName.name} is a ${crewName.species}. They are ${crewName.age} years old and ${crewName.mass} kilograms. Their ID is ${crewName.astronautID} and they just moved ${crewName.move()} steps`) 
   }   
}
//crewReports2(crew)

// Start an animal race!

// // crew.forEach(function(animal) {
// //    animal.numSteps = 0
// //    animal.turns = 0
// });

function fitnessTest(crew){
   let results = [];
   for (let i = 0; i < crew.length; i++){
      let numSteps = 0;
      let turns = 0;
      while(numSteps <= 20){
       numSteps += crew[i].move();
       turns++;
       }
       results.push(`${crew[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  };

console.log(fitnessTest(crew))
console.log(tardigrade.turns)  //last part was pulled/reworked to meet my property names and such from the solutions.
                              // Can you show me how to pass the fitness test scores of numSteps and turns?
