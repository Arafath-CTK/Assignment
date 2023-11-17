// Write a function to calculate the sum of all even numbers between 1 and n.

function sumOfEven(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}

//Sample tests
sumOfEven(10);
