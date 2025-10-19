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
