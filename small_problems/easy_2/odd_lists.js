/* Odd Lists

Write a function that returns an Array that contains every other element 
of an Array that is passed in as an argument. The values in the returned 
list should be those values that are in the 1st, 3rd, 5th, and so on 
elements of the argument Array.

input: array of elements
output: elements of every odd numbered index



*/

let oddities = array => {
  let newArray = [];
  for (let index = 0; index < array.length; index ++) {
    if (index % 2 === 0) {
      newArray.push(array[index]);
    } 
    
  }
  return newArray;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

