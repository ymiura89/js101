// Problem 1
// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

advice.replace('important', 'urgent');

// Problem 2
// The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.

let numbers = [1, 2, 3, 4, 5];
let reverseNumbers = numbers.slice().reverse(); /* slice() creates a shadow array that can tehn be reversed. This allows us to reverse without mutating the orignal array.*/
console.log(reverseNumbers); // [ 5, 4, 3, 2, 1 ]
console.log(numbers);

numbers = [1, 2, 3, 4, 5];

let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedArray);
console.log(numbers);

// Problem 3
// Given a number and an array, determine whether the number is included in the array.

let numberList = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(numberList.includes(number1));
console.log(numberList.includes(number2));

// Problem 4
// Using the below string, show two different ways to put the expected "Four score and " in front of it.
let famousWords = "seven years ago...";

console.log("Four score and " + famousWords);
console.log(`Four score and ${famousWords}`)

// Problem 5
// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

let arrayOfNumbers = [1, 2, 3, 4, 5];

arrayOfNumbers.splice(2,1)
console.log(arrayOfNumbers)

// Problem 6
//  Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// This code will create a nested array that looks like this:

// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Nesting data structures like we do here is commonplace in JavaScript and programming in general. We'll explore this in much greater depth in a future Lesson.
// 
// Create a new array that contains all of the above values, but in an un-nested format:

console.log(flintstones.flat());

// Other solutions

let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});

flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);

flintstones = [].concat(...flintstones);

// Problem 7
// Create an array from this object that contains only two elements: Barney's name and Barney's number:

flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let neighbor = Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();

// Problem 8
// How would you check whether the objects assigned to variables numbers and table below are arrays?

let numbers1 = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbers1));
console.log(Array.isArray(table));

// Problem 9
// Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

let title = "Flintstone Family Members";

let spaceRemaining = Math.floor(40 - title.length);

title.padStart(spaceRemaining + title.length);

// Problem 10
// Write a one-line expression to count the number of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;
