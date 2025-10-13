/**
 Create a function that takes a string 

 containing integers as well as other characters and 

 return the sum of the negative integers only.

Examples

negativeSum("-12 13%14&-11") ➞ -23
// -12 + -11 = -23

negativeSum("22 13%14&-11-22 13 12") ➞ -33
// -11 + -22 = -33
 */

const negativeSum = (str) =>
  (str.match(/-\d+/g) || []).reduce((sum, el) => sum + +el, 0);


console.log(negativeSum('helloworld'));

console.log(negativeSum("-12 13%14&-11"), -23);

console.log(negativeSum("-12 13%14&-2 0 12 -4"), -18);

console.log(negativeSum("33%14&-1 12 a 21 -2 b c"), -3);

console.log(negativeSum("22 13%14&-11-22 13 12"), -33);

console.log(negativeSum("-12 -8"), -20);


/*
Create a function that counts the number of blocks of two or more adjacent 1s in an array.

Examples

countOnes([1, 0, 0, 1, 1, 0, 1, 1, 1]) ➞ 2
// Two instances: [1, 1] (middle) and [1, 1, 1] (end)

countOnes([1, 0, 1, 0, 1, 0, 1, 0]) ➞ 0

countOnes([1, 1, 1, 1, 0, 0, 0, 0]) ➞ 1

countOnes([0, 0, 0]) ➞ 0
*/
const countOnes = (ar) => {
  let ones = ar.join("").match(/1{2,}/g) || [];
  return ones.length;
};

console.log(countOnes([1, 1, 1, 1, 1]), 1);
console.log(countOnes([1, 1, 1, 1, 0]), 1);
console.log(countOnes([0, 0, 0, 0, 0]), 0);
console.log(countOnes([1, 0, 0, 0, 0]), 0);
console.log(countOnes([1, 0, 1, 0, 1]), 0);
console.log(countOnes([1, 0, 0, 0, 1, 0, 0, 1, 1]), 1);
console.log(countOnes([1, 1, 0, 1, 1, 0, 0, 1, 1]), 3);
console.log(countOnes([1, 0, 0, 1, 1, 0, 0, 1, 1]), 2);
console.log(countOnes([1, 0, 0, 1, 1, 0, 1, 1, 1]), 2);
console.log(countOnes([1, 0, 1, 0, 1, 0, 1, 0]), 0);
console.log(countOnes([1, 1, 1, 1, 0, 0, 0, 0]), 1);
console.log(countOnes([1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1]), 3);
