function lessThan(upperLimit) {
  let numbers = [];
  let candidate = 1;

  while (candidate < upperLimit) {
    numbers.push(candidate);
  }

  return numbers;
}

console.log(lessThan(5));
console.log(lessThan(1));
console.log(lessThan(8));
console.log(lessThan(50));
console.log(lessThan(1000));