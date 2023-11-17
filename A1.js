// Write a function to find the maximum element in a array

function maxNumber(array) {
  const mn = array.reduce((a, b) => (b > a ? b : a));
  console.log(mn);
}

//Sample tests
let x = [2, 4, 6, 8, 8, 7, 66, 77, 55, 4, 66, 24, 9];
maxNumber(x);
