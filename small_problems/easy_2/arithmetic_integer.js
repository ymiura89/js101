let RLSYNC = require("readline-sync");

console.log("Enter your first number:");
let firstNumber = Number(RLSYNC.prompt());

console.log("Enter your second number:");
let secondNumber = Number(RLSYNC.prompt());

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber - secondNumber}`);

console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);

console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);

console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);

console.log(`${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);
