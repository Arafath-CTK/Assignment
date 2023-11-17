// Write a function to check given string is palindrome or not

function palindrome(string) {
  let isPalindrome = 0;
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      isPalindrome = 1;
      break;
    }
  }
  if (isPalindrome === 0) {
    console.log("'" + string + "' is a palindrome");
  } else {
    console.log("'" + string + "' is not a palindrome");
  }
}

//Sample tests
palindrome("arafath");
palindrome("racecar");
palindrome("malayalam");
