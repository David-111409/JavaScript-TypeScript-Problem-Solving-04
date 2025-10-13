/*
Bitwise Operator to Check Odd, Regular Expression to Check Even
Create two functions:

The first is isOdd() to check if a given number is odd using bitwise operator.
The second is isEven() to check if a given input is even using regular expressions.
Use of % operator is disallowed.

Examples

isOdd(3) ➞ "Yes"
// Use Bitwise Operator

isOdd(58) ➞ "No"
// Use Bitwise Operator

isEven("0") ➞ "Yes"
// Use Regular Expression

isEven("-99") ➞ "No"
// Use Regular Expression
*/

const isOdd = (n) => ((n >> 1) * 2 !== n ? "Yes" : "No");
// const isOdd = (n) => (n & 1 ? "Yes" : "No");
const isEven = (n) => (/[02468]$/.test(n) ? "Yes" : "No");
console.log(isOdd(3));
console.log(isOdd(58));
console.log(isOdd(5));
console.log(isOdd(4));
console.log(isEven("4140"));
console.log(isEven("1251"));

console.log(isOdd(-7), "Yes");

console.log(isOdd(-5), "Yes");

console.log(isOdd(17), "Yes");

console.log(isOdd(-6), "No");

console.log(isOdd(0), "No");

console.log(isEven("-7"), "No");

console.log(isEven("111"), "No");

console.log(isEven("0"), "Yes");

console.log(isEven("-12"), "Yes");

console.log(isEven("40"), "Yes");
