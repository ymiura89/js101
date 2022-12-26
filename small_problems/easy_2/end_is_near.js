/* 
Input: a string
Output: the second to last element of the string.

Rules:
1. input will alawys contain two words.
2. words are any sequence of non blank characters

*/

let penultimate = (string) => {
  if (string === '') {
    return 'Please enter a set of words.'
  }
  if (string.includes(' ') === false) {
    return 'Words are defined by a space. Please seperate your words.'
  }
  
  let wordList = string.split(' ');
  return wordList[Math.floor(wordList.length / 2)];

  
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

