/* Get Middle Character
Write a function that takes a non-empty string argument and returns the 
middle character(s) of the string. If the string has an odd length, you 
should return exactly one character. If the string has an even length, 
you should return exactly two characters.

Explicit Rules
1. string input will be non empty
2. odd lengths return one character
3. even lengths return two character
4. 

Algorithm
1. determine the length of string.
  - if odd, return one character.
  - if even, return two.
2. 

*/

function centerOf(string) {
  let inputArray = string.split();
  let returnedString = [];

  for (let i = 0; i < inputArray.length; i += 1) {
    if (string.length % 2 === 0) {
      let middleTwo = string.length / 2;
      returnedString.push(string[middleTwo - 1], string[middleTwo]);
    } else {
      let middle = Math.ceil(string.length / 2);
      returnedString.push(string[middle - 1]);

    }
  }
return returnedString.toString();
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"