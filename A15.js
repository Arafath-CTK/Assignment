// Write a program to find the sum of all prime numbers up to a given limit. 

function sumOfPrime(limit) {
  let primeArray = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime === true) {
      primeArray.push(i);
    }
  }
  console.log(primeArray.reduce((a, b) => a + b, 0));
}

//Sample tests
sumOfPrime(11);
