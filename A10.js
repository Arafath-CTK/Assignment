// Write a program to find the maximum and minimum   elements in an array of integers.

function minAndMax(array) {
  console.log("The max value is " + Math.max(...array));
  console.log("The min value is " + Math.min(...array));
}

//Sample tests
let a = [2, 3, 4, 5, 6, 7, 7, 5, 9, 2, 1];
minAndMax(a);
