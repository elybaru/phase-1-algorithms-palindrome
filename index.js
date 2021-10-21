function isPalindrome(word) {
  let palindrome = ""
  for (let i = word.length - 1; i >= 0; i--) {
    palindrome += word[i];
  }
  if (palindrome === word) {
    return true
  } else {
    return false
  }
}

/* 
  the start of the for loop represents the last letter (last index value) of the word, word.length -1
  It continues adding each index of the word until it gets to the end, having reversed the string
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
