/* Leap Years Pt 1
In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible 
by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not 
a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater
than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.
*/

// REFACTURE THIS

const isLeapYear = (targetYear) => {
    if (targetYear % 4 === 0 && targetYear % 100 !== 0) {
      return true;
    } else if (targetYear % 4 === 0 && targetYear % 100 === 0) {
      if (targetYear % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }  
}

// REFACTORED

const isLeapYear = year => {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return (year % 4 === 0);
  }
}

// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true


// Part 2
// 

const isLeapYear = (targetYear) => {
  if (targetYear < 1752 && targetYear % 4 === 0) {
    return true;
  } else {
    if (targetYear % 4 === 0 && targetYear % 100 !== 0) {
      return true;
    } else if (targetYear % 4 === 0 && targetYear % 100 === 0) {
      if (targetYear % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }  
  }
}

// Refatctored off Solution

function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true