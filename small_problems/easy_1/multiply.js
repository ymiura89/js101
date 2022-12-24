function multiply(numberList, factor) {
  let multipliedNumbers = [];

  for (let counter = 0; counter < numberList.length; counter++) {
    multipliedNumbers.push(numberList[counter] * factor);
  }
  return multipliedNumbers;
}