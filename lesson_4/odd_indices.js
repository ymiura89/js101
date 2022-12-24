/*Rules
- Double the integers that have odd indexes.
Input: an array of integers.
Output: an array of integers with every odd index doubled.*/

function doubleOddIndices(numbers) {
  let doubledNums = [];

  for ( let counter = 0; counter < numbers.length; counter++) {
    let currentNumber = numbers[counter];

    if (counter % 2 === 1) {
      doubledNums.push(currentNumber * 2);
    } else {
      doubledNums.push(currentNumber);
    }
  }
  return doubledNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
doubleOddIndices(myNumbers);  // => [1, 8, 3, 21, 2, 12]