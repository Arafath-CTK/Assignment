// Write a function to remove duplicates from a array

function duplicateRemove(array) {
  console.log([...new Set(array)]);
}

//Sample tests
let x = [2, 4, 3, 3, 5, 3, 7, 8, 2, 4, 9, 7, 6, 5, 4];
duplicateRemove(x);
