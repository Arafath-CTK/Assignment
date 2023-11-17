// Write a program to find the sum of all the multiples of 3 or 5 below a given number.

function mThreeOrFive(limit) {
  let multiple = [];
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiple.push(i);
    }
  }
  console.log(multiple.reduce((a, b) => a + b, 0));
}

//Sample tests
mThreeOrFive(10);
