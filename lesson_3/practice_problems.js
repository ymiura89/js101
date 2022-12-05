//  Problem 2
// How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

str1.endsWith('!');
str2.endsWith('!');

//  Problem 3
// Determine whether the following object of people and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
ages.hasOwnProperty('Spot');

// Problem 4
// Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase();

//  Problem 6
// We have most of the Munster family in our ages object:

let ages1 = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// Add entries for Marilyn and Spot to the object:

let additionalAges = { Marilyn: 22, Spot: 237 };

let wholeFamily = Object.assign(ages1, additionalAges);

// Problem 7
// Determine whether the name Dino appears in the strings below -- check each string separately):

let str3 = "Few things in life are as important as house training your pet dinosaur.";
let str4 = "Fred and Wilma have a pet dinosaur named Dino.";

str3.includes('Dino');
str4.includes('Dino');

// Problem 8
// How can we add the family pet, "Dino" and "Hoppy", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push('Dino', 'hoppy');

// Problem 10
// Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

advice.slice(0, advice.indexOf('house'));