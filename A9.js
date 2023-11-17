// Write a function to generate all prime numbers up to a given limit

function primeGeneration(limit) {
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime === true) {
      console.log(i);
    }
  }
}

//Sample tests
primeGeneration(20);
