/*

Returns UTF-16 String Value
  -sum of UTF-16 code
Must return code for each individual code.

Questions?
What about spaces?
How should it respond to empy strings?
*/


function utf16Value(string) {
  sum = 0;

  for (let character = 0; character < string.length; character += 1) {
    sum += string.charCodeAt(character);
  }
  return sum;
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811