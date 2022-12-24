Sort Strings by Most Adjacent Consonants

Input: an array of strings
Output: a new array with the strings sorted by greatest number of adjacent consonants

Explicit Rules
1. sort through all the arrays in a string and tally the number of adjacent consonats
2. serach through each one to determine order of arrays
3. exclude spaces between words when iterating over arrays
4. ifmultiple strings are tied, place them in n the original order

Questions
- Does punctuation disrupt the chain of consonants?
~ No punctuation in test cases.

- Are upper and lower case letters treated as equivalent? 
~ All strings look to be lower case.

- Do strings always contain multiple words? Yes.
  * can they be a single word? No.
  * can they be empty? No.
- Is it possible for a string to contain no adjacent consonants? Yes.
- Should the words be strings sorted in ascending or descending order? Descending order.

Data Structures
Our input and output will be strings within arrays.

We will need some sort of numerical counter in order to track which words have the greatest number of adjacent consonents

Object to track value of each string
{
  'aa': 0,
  'baa': 0,
  'ccaa': 2,
  'dddaa': 3
}


Algorithm
1. create a variable for all vowels to check against arrays
2. create a function that receives an array of strings and...
  - removes the white spaces in a each string
  - counts all the consecutive consonents between vowels
  - could possible create an object for each string with a value of 'number of adj consonents'
3. create another function that interacts with the object to sort by value and returns the updated order

- Remove the spaces from the input string
- Initialize a count to zero
- Initialize a temp string to an empty string
- Iterate through the input string. For each letter:
  - If the letter is a consonant, concatenate it to the temp string
  - If the letter is a vowel:
    - If the temp string has has a length greater than 1 AND the temp string has a length greater than the current count, set the count to the length of the temp string
    - Reset the temp string to an empty string
- Return the count