// Problem 1
// Write three different ways to remove all of the elements from the following array:
let numbers = [1, 2, 3, 4];

numbers.length = 0;

numbers.splice(0, numbers.length);

while (numbers.length) {
  numbers.pop();
}

// Problem 2
// What will the following code output?
console.log([1, 2, 3] + [4, 5]);

// 1,2,34,5
// In some languages you can use + to concatenate two arrays, but not in JavaScript. In JavaScript, the + operator first converts the arrays to strings, and then concatenates the strings, so the output is the string 1,2,34,5.

// Problem 3
// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// "hello there"

// Problem 4
// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// arr1 was not mutated due to slice.

// Problem 5
// The following function unnecessarily uses two return statements to return boolean values. Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValid(color) {
  return (color === "blue" || "green");
}

const isColorValid = color => ["blue", "green"].includes(color);

// Problem 6
// 




// Problem 7
// 




// Problem 8
// 




// Problem 9
// 




// Problem 10
// 




