// Write a program to find the sum of all the even or odd numbers below a given number.

function sumOfAllEvenOdd(limit) {
  let numbers = [];
  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }
  console.log(numbers.reduce((a, b) => a + b, 0));
}

//Sample tests
sumOfAllEvenOdd(5);
