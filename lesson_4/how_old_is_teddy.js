/* How Old is Teddy?
Build a program that randomly generates Teddy's age, and logs it to the 
console. Have the age be a random number between 20 and 120 (inclusive). */

function ageOfTed(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let teddysAge = Math.floor(Math.random() * (max - min) + min)
  return teddysAge;
}

console.log(`Teddy is ${teddysAge} years old.`)