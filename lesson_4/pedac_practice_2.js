function sortStringsByConsonants(strings) {
  let sortedStrings = strings.sort((a, b) => countMaxAdjacentConsonants(b) - countMaxAdjacentConsonants(a));
  return sortedStrings;
}

function countMaxAdjacentConsonants(string) {
  string = string.split(' ').join('');
  let count = 0;
  let tempString = '';


  for (let index = 0; index < string.length; index += 1) {
    let letter = string[index];

    if ('bcdfghjklmnpqrstvwxyz'.includes(letter)) {
      tempString += letter;
      if (tempString.length > 1 && tempString.length > count) {
        count = tempString.length;
      }
    } else {
      if (tempString.length > 1 && tempString.length > count) {
        count = tempString.length;
        tempString = '';
      }
    }
  }
  return count;
}



// console.log(countMaxAdjacentConsonants('dddaa')); // 3
// console.log(countMaxAdjacentConsonants('ccaa')); // 2
// console.log(countMaxAdjacentConsonants('baa')); // 0
// console.log(countMaxAdjacentConsonants('aa')); // 0

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']