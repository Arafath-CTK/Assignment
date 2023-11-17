// Write a program to count the number of vowels in a given string.

function vowelCount(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u" ||
      string[i] === "A" ||
      string[i] === "E" ||
      string[i] === "I" ||
      string[i] === "O" ||
      string[i] === "U"
    ) {
      count++;
    }
  }
  console.log("The count of vowels in '" + string + "' is " + count);
}

//Sample tests
vowelCount("desktOp");
vowelCount("javA Script");
vowelCount("Thank You");
