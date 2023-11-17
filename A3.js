// Write a function to sort a array in ascending order

function sortAsc(array) {
  console.log(array.sort((a, b) => a - b));
}

//Sample tests
sortAsc([5, 6, 4, 3, 5, 8]);
