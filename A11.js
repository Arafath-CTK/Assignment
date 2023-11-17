// Write a function to calculate the factorial of a given number n

function factorial(number) {
  let k = 0;
  let array = [];

  for (let i = 1; i <= number; i++) {
    array[k] = i;
    k++;
  }

  console.log(array.reduce((a, b) => a * b));
}

//Sample tests
factorial(10);
