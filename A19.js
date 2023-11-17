// Write a program to find the sum of the digits of a given number.

function sumOfDigits(number) {
  let digits = number.toString().split("").map(Number);
  console.log(digits.reduce((a, b) => a + b, 0));
}

//Sample tests
sumOfDigits(222);
sumOfDigits(450);
