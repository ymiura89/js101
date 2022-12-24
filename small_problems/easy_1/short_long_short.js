/* Short Long Short
Write a function that takes two strings as arguments, determines the length of the two strings, and
then returns the result of concatenating the shorter string, the longer string, and the shorter string 
once again. You may assume that the strings are of different lengths.*/


// REFACTPR THIS //

const shortLongShort = (str1, str2) => {
  let short = '';
  let long = '';

  if (str1.length > str2.length) {
    long += str1;
    short += str2
  } else {
    long += str2;
    short += str1;
  }

  console.log(`${short}${long}${short}`);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

// REFACTOR THIS // 