/* Iterating over Objects is a bit harder than strings and arrays.

Examine the example below.*/

let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

let pets = Object.keys(numberOfPets);
let counter = 0;

while (counter < pets.length)  {
  let currentPet = pets[counter];
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
  counter += 1;
}

/* Two Step Process
1.) Iterate over the keys and save them to a 'key' group.

2.) Use group to creat an index or Current Key variable.

Now you can select individual keys and values using your index selector.*/

let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

for (let currentPet in numberOfPets) {
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
}

// Don't forget about for/in loops. They can be simpler when iterating over objects.

/* Break Positioning
Putting a break; at the end of your while loop creates a do/while effect.*/
let number;

do {
  number = Math.floor(10 * Math.random());
  console.log(number);
} while (number !== 5);

console.log('Exiting...');
// If we put the break at the beginning of the loop, it mimics a regular while loop:
let str = '';

while (true) {
  if (str.length >= 10) {
    break;
  }

  str += '*';
  console.log(str);
}
//  Or even better...
let str = '';

while (str.length < 10) {
  str += '*';
  console.log(str);
}


