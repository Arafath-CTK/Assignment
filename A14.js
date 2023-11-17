// A program to print the Fibonacci series

function fibonacci(limit) {
  let fArray = [0, 1];
  for (let i = 2; i < limit; i++) {
    fArray.push(fArray[fArray.length - 1] + fArray[fArray.length - 2]);
  }
  console.log(fArray);
}

//Sample tests
fibonacci(10);
