Sum Even Number Rows

Explicit Requirements

- Sequence of EVEN integers
- They are consecutive
- First integer is 2
- Sequence is grouped into rows
- Each row is incrementally larger: 1, 2, 3, …
- Row ‘number’ equals the number of elements in the row
- input: integer representing number of a particular row
- output: sum of all integers of that row

Questions

- Is there a limit to how many rows I need to be able to solve for?
- What do I return for negative numbers? Odd numbers?

Visual Reference

- Sequence:

2, 4, 6, 8, 10, 12, 14, 16, 18, …

- Sequence in Rows:

2,
4, 6
8, 10, 12
14, 16, 18, 20
....

- How do we create this structure?

**Examples**

row number 1 --> sum of integers in row: 2
row number 2 --> sum of integers in row: 10
row number 4 --> sum of integers in row: 68

2 --> 2
4, 6 --> 10
8, 10, 12 --> 30
....


**Data Structures**

2,
4, 6
8, 10, 12
14, 16, 18, 20
....

- Overall structure representing a sequence as a whole
- Individual rows within overall structure
- Individual rows in a set order in context of sequence
- Individual rows contain integers
- Integers are in a set order in context of the sequence


[
  [2],
  [4, 6],
  [8, 10, 12],
  [14, 16, 18, 20],
  ....
]

**Algorithm**
1. Create an empty 'rows' array to contain all of the rows
2. Create a 'row' array and it to the overall 'rows' array
3. Repeat steps 2 until all the necessary rows have been created
  - all rows have been created when  the length of the rows array is equal to the input integer
4. Sum the final row
5. Return the sum

*Problem: Create a Row*
Rules:
- row is an array
- array contains integers
- integers are consecutive even numbers
- integers in each row form part of an overall larger sequence
- rows are of different lengths
- Input: the information needed to create the output
    > The starting integer
    > The length of the row
- Output: the row itself: '[8, 10, 12]'

Examples:
start2, length: 1 --> [2]
start4, length: 2 --> [4, 6]
start8, length: 3 --> [8, 10, 12]
....

Data Structure:
- An array of integers

Algorithm:
1. Create an empty 'row' array to contain all the integers
2. Add starting integer
3. Increment the starting integer by two to get the integer in the next sequence
4. Repeat steps 2 and 3 until the array has reached the correct length
5. Return the row array
