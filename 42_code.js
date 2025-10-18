/*
Sum of Every Nth Number
Given an array of numbers and a positive value for n, return the sum of every nth number in the array.

Examples

sumEveryNth([4, 8, 6, 6, 7, 9, 3], 1) ➞ 43
// 4+8+6+6+7+9+3 = 43

sumEveryNth([7, 3, 10, 4, 5, 8, 4, 9, 6, 9, 10, 1, 4], 4) ➞ 14
// 4+9+1 = 14

sumEveryNth([10, 6, 5, 4, 5, 2, 3, 3, 8, 10, 7, 2], 8) ➞ 3
// 3

sumEveryNth([6, 8, 9, 4, 6, 4, 7, 1, 5, 6, 10, 2], 13) ➞ 0
// only 12 numbers in array
*/
function sumEveryNth(arr, n) {
  let sum = 0;
  let l = arr.length;

  for (let i = n - 1; i < l; i += n) {
    sum += arr[i];
  }

  return sum;
}

// Example usage:
console.log(sumEveryNth([2, 5, 3, 9, 5, 7, 10, 7, 3, 3, 3], 9), 3);
console.log(
  sumEveryNth([10, 9, 2, 5, 9, 6, 4, 6, 7, 10, 9, 9, 9, 9, 2, 1, 2], 7),
  13
);
console.log(
  sumEveryNth([4, 5, 8, 7, 8, 1, 7, 9, 7, 4, 6, 2, 8, 8, 9, 9, 1, 7, 4], 6),
  10
);
console.log(
  sumEveryNth([8, 3, 5, 2, 6, 1, 5, 4, 3, 6, 6, 8, 5, 10, 7, 3, 7, 3, 5], 11),
  6
);
console.log(
  sumEveryNth([8, 9, 4, 8, 7, 5, 2, 9, 1, 8, 3, 8, 4, 9, 9, 6], 11),
  3
);
console.log(sumEveryNth([8, 2, 2, 7, 10, 6, 3, 5, 4, 4], 12), 0);
console.log(
  sumEveryNth([7, 4, 4, 10, 2, 6, 1, 9, 5, 10, 6, 4, 6, 6, 5, 9, 4, 10, 9], 8),
  18
);
console.log(
  sumEveryNth(
    [5, 10, 10, 9, 10, 3, 5, 6, 6, 2, 10, 2, 9, 6, 8, 9, 10, 9, 4],
    16
  ),
  9
);
console.log(
  sumEveryNth([10, 4, 8, 4, 3, 9, 1, 1, 10, 7, 1, 4, 5, 5, 6, 1, 9], 6),
  13
);
console.log(
  sumEveryNth([2, 6, 3, 10, 6, 5, 4, 7, 9, 4, 1, 8, 9, 10, 8, 7, 2, 3, 6], 8),
  14
);
console.log(sumEveryNth([10, 9, 7, 8, 5, 7, 9, 5, 3, 3, 1], 7), 9);
console.log(
  sumEveryNth([7, 2, 9, 6, 1, 8, 8, 10, 2, 5, 5, 7, 3, 10, 1], 2),
  48
);
console.log(sumEveryNth([3, 10, 3, 8, 10, 9, 1, 3, 7, 2], 2), 32);
console.log(sumEveryNth([6, 5, 7, 9, 4, 2, 2, 9, 8, 10, 5, 2, 8], 7), 2);
console.log(sumEveryNth([9, 3, 7, 10, 3, 10, 2, 8, 8, 7, 1], 11), 1);
console.log(
  sumEveryNth([4, 6, 10, 8, 4, 7, 10, 10, 4, 4, 9, 2, 1, 9, 9, 8, 6, 6, 10], 7),
  19
);
console.log(sumEveryNth([3, 3, 2, 6, 4, 4, 10, 2, 10, 5, 5, 8, 6], 1), 68);
console.log(
  sumEveryNth([10, 1, 10, 8, 3, 2, 10, 8, 2, 3, 8, 7, 6, 4, 8], 6),
  9
);
console.log(
  sumEveryNth([5, 1, 4, 7, 3, 9, 4, 5, 9, 6, 1, 6, 9, 6, 7, 6, 8, 1], 14),
  6
);
console.log(sumEveryNth([2, 1, 7, 4, 2, 6, 2, 4, 6, 1, 2, 2, 10, 10], 2), 28);
