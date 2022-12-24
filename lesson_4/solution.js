// **Algorithm**
// 1. Create an empty 'rows' array to contain 
// all of the rows
// 2. Create a 'row' array and it to the overall 
// 'rows' array
// 3. Repeat steps 2 until all the necessary 
// rows have been created
  // - all rows have been created when  the 
// length of the rows array is equal to the 
// input integer
// 4. Sum the final row
// 5. Return the sum

function sumEvenNumberRow(rowNumber) {
  const rows = [];
  let startInteger = 2;

  for (let currentRowNum = 1; currentRowNum <= rowNumber; currentRowNum +=1) {
    let row = createRow(startInteger, currentRowNum);
    rows.push(row);
    startInteger = row[row.length -1] + 2;
  }

  let finalRow = rows.pop()
  // let finalRowSum = 0;
  // finalRow.forEach(num => finalRowSum += num);
  return finalRow.reduce((a, b) => a + b);
}

// Algorithm:
// 1. Create an empty 'row' array to contain all
// the integers
// 2. Add starting integer
// 3. Increment the starting integer by two to 
// get the integer in the next sequence
// 4. Repeat steps 2 and 3 until the array has 
// reached the correct length
// 5. Return the row array

function createRow(startInteger, rowLength) {
  const row = [];
  let currentInteger = startInteger;
  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }
  return row;
}

// console.log(sumEvenNumberRow(1)) // 2
// console.log(sumEvenNumberRow(2)) // 10
// console.log(sumEvenNumberRow(4)) // 68

// console.log(createRow(2, 1)) // [2]
// console.log(createRow(4, 2)) // [4, 6]
// console.log(createRow(8, 3)) // [8, 10, 12]