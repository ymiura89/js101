/*
Welcome Stranger
Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more 
elements that, when combined with adjoining spaces, will produce a person's name. The object will 
contain two keys, "title" and "occupation", and the appropriate values. Your function should return 
a greeting that uses the person's full name, and mentions the person's title

Explicit Rules
- function takes two arguments
  - array and an object
- array will contain 2 or more elements that when combined with adjiining spaces will produce a name
- object contains two keys
  - title and occupation
- return a greeting that uses the person's name and occupoation and title.

*/

function greetings(nameArray, titleOccupation) {
  let properName = nameArray.join(' ');
  let occupation = Object.values(titleOccupation);
  return `Hello, ${properName}! Nice to have a ${occupation.join(' ')} around.` 
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.