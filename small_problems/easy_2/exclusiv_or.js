/* Exclusive Or
The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one, but not both, of two conditions to be truthy: the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

Input: function takes 2 arguments and returns true if exactly one of its arguments is truthy, or false otherwise.
Output: returns a boolean result
        a. true if one argument is truthy
        b. false in every other instance

Explicit Rules:
1. two arguments are entered into the function.
  - function must scan the arguments individually for truthyness
    - if both argumetns are truthy, return false (not falsey)
    - if both arguments are falsey, return false.
    - if one argument is truthy, return true

Questions:
Can strings be included?



Algorithm
1. Create a global variable for falsy values
2. function takes in two arguments
3. each argument is checked to see if falsy variable is included in argument.
4. we could add true statements in a counter and check to see if that is equal to 1.
5. if not we return false.


Does not recognize arg1.includes. need a different way to use this method or rethink algo.
*/

function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}


// test cases
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);