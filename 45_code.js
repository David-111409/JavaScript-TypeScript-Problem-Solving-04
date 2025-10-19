function checkAllEven(arr) {
  return arr.every((x) => x % 2 === 0);
}

console.log(checkAllEven([1, 2, 3, 4]), false);
console.log(checkAllEven([2, 4, 6]), true);

console.log(checkAllEven([5, 6, 8, 10]), false);
console.log(checkAllEven([-2, 2, -2, 2]), true);

/*
Write a function that returns true if a number is a palindrome.

Examples

isPalindrome(838) ➞ true

isPalindrome(4433) ➞ false

isPalindrome(443344) ➞ true
*/

function isPalindrome(num) {
  //   const strNum = num.toString();
  //   const reversedStrNum = strNum.split('').reverse().join('');
  //   return strNum === reversedStrNum;
  let rev = 0;
  let k = num;

  while (k) {
    rev = rev * 10 + (k % 10);
    k = Math.floor(k / 10);
  }

  return rev === num;
}

console.log(isPalindrome(838)); // ➞ true
console.log(isPalindrome(838), true);

console.log(isPalindrome(77), true);
console.log(isPalindrome(95159), true);

console.log(isPalindrome(839), false);
console.log(isPalindrome(4234), false);

console.log(isPalindrome(13), false);

/*
Position in the Alphabet
Given a number between 1-26, return what letter is at that position in the alphabet. 
Return "invalid" if the number given is not within that range, or isn't an integer.

Examples

letterAtPosition(1) ➞ "a"

letterAtPosition(26.0) ➞ "z"

letterAtPosition(0) ➞ "invalid"

letterAtPosition(4.5) ➞ "invalid"
*/

function letterAtPosition(num) {

  if (!Number.isInteger(num) || num < 1 || num > 26) {
    return "invalid";
  }

  return String.fromCharCode(96 + num);
}

console.log(letterAtPosition(1), "a");
console.log(letterAtPosition(2), "b");
console.log(letterAtPosition(3), "c");
console.log(letterAtPosition(4), "d");
console.log(letterAtPosition(5), "e");
console.log(letterAtPosition(6), "f");
console.log(letterAtPosition(7), "g");
console.log(letterAtPosition(8), "h");
console.log(letterAtPosition(9), "i");
console.log(letterAtPosition(10), "j");
console.log(letterAtPosition(11), "k");
console.log(letterAtPosition(12), "l");
console.log(letterAtPosition(13), "m");
console.log(letterAtPosition(14), "n");
console.log(letterAtPosition(15), "o");
console.log(letterAtPosition(16), "p");
console.log(letterAtPosition(17), "q");
console.log(letterAtPosition(18), "r");
console.log(letterAtPosition(19), "s");
console.log(letterAtPosition(20), "t");
console.log(letterAtPosition(21), "u");
console.log(letterAtPosition(22), "v");
console.log(letterAtPosition(23), "w");
console.log(letterAtPosition(24), "x");
console.log(letterAtPosition(25), "y");
console.log(letterAtPosition(26), "z");
console.log(letterAtPosition(0), "invalid");
console.log(letterAtPosition(4.5), "invalid");
console.log(letterAtPosition(4.0), "d");
console.log(letterAtPosition(1.0), "a");
console.log(letterAtPosition(26.0), "z");
