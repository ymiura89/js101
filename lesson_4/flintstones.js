let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintstonesObj = {};

flintstones.forEach((name, index) => {
  flintstonesObj[name] = index;
});

flintstonesObj;

// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

// let ages = {
  // Herman: 32,
  // Lily: 30,
  // Grandpa: 5843,
  // Eddie: 10,
  // Marilyn: 22,
  // Spot: 237
// };
// 
// 
// const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);
// 
// const findLowest = obj => {
  // let objSorted = Object.values(obj).sort();
  // return objSorted[0];
// }


/*
or

let totalAges = 0;
Object.values(ages).forEach(age => totalAges += age);
totalAges; // => 6174

*/

// function sumObjects(object) {
  // let sum = 0;
  // let people = Object.keys(object);
  // let value = Object.values(object)
  // 
  // for (people in ages) {
    // sum += Number(value);
    // return sum;
  // }
  // return sum;
// }
// 

