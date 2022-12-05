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