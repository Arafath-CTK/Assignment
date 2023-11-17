// Write a function to calculate the sum of all numbers in a array

function sumOfAll(array) {
  console.log(array.reduce((a, b) => a + b));
}

//Sample tests
let x = [1, 2, 3, 4, 5, 6];
sumOfAll(x);
