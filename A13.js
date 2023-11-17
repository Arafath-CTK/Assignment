// Write a function to check if a given number is an Armstrong number.

function armstrongNumber(number) {
  let nArray = number.toString().split("").map(Number);
  let aNumber = nArray.reduce((a, b) => a + b ** nArray.length, 0);

  if (number === aNumber) {
    console.log(number + " is an Armstrong number");
  } else {
    console.log(number + " is not an Armstrong number");
  }
}

//Sample tests
armstrongNumber(500);
armstrongNumber(175);
armstrongNumber(153);
armstrongNumber(9474);
