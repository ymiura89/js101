/* When Will I Retire?
Build a program that logs when the user will retire and how many more 
years the user has to work until retirement.
*/

let RLSYNC = require('readline-sync');
let date = new Date().getFullYear();

let currentAge = RLSYNC.question('What is your current age? ');

let retireAge = RLSYNC.question('What age do you want to retire? ');

let retirementYear = ((retireAge - currentAge) + date);

console.log(`It is ${date}. You will reture in the year ${retirementYear}.`)
console.log(`You only have ${retireAge - currentAge} years to go.`)