/**
 Product of Two Largest Numbers
Create a function that takes an array of numbers and 
returns the product of the largest and max2 largest UNIQUE numbers in the array. 
So, if there are multiple of the same highest integer, only count one towards the highest product
-- see the examples below for more.

Examples

product([2, 3, 1, -1, 2]) ➞ 6
// 2 * 3 = 6

product([-2, -2, -1, -1]) ➞ 2
// -2 * - 1 = 2
// Not 1, because you can only use -1 one time.

product([8, 8, 8]) ➞ 64
// 8 * 8 = 64
// You can repeat here because there is only one value.

product([2, 8, 8, 8]) ➞ 16
// 2 * 8 = 16
// Not 64, because you can only use 8 one time.
 */

function product(arr) {
  let max1 = -Infinity;
  let max2 = -Infinity;

  for (let num of arr) {
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2 && num !== max1) {
      max2 = num;
    }
  }

  if (max2 === -Infinity) {
    max2 = max1;
  }

  return max1 * max2;
}

console.log(product([2, 3, 1, -1, 2]), 6);
console.log(product([-2, -2, -1, -1]), 2);
console.log(product([8, 8, 8]), 64);
console.log(product([-2, -1, 100, -12, 0]), 0);
console.log(product([1, 2, 3, 4]), 12);
console.log(product([-12, 5, 5, 8, 8, 8]), 40);
console.log(product([2, 8, 8, 8]), 16);
