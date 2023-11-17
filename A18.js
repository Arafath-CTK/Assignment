// Write a program to find the union of two arrays of integers.

function unionOfArrays(array1, array2) {
  let concatArray = array1.concat(array2);
  let union = [...new Set(concatArray)];
  console.log(union.sort());
}

//Sample tests
let a = [1, 3, 5, 7, 3, 5, 8];
let b = [2, 4, 6, 8, 4, 6, 1];
unionOfArrays(a, b);
