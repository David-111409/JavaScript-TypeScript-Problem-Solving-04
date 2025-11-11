/*
Sum Fractions

Create a function that takes an array containing nested arrays as an argument. 
Each subarray has 2 elements. The first element is the numerator and the second element is the denominator. 
Return the sum of the fractions rounded to the nearest whole number.
Examples

sumFractions([[18, 13], [4, 5]]) ➞ 2

sumFractions([[36, 4], [22, 60]]) ➞ 9

sumFractions([[11, 2], [3, 4], [5, 4], [21, 11], [12, 6]]) ➞ 11
*/

function sumFractions(arr) {
  let sum = 0;
  for (let [n, d] of arr) {
    sum += n / d;
  }
  return Math.round(sum);
}

console.log(
  sumFractions([
    [18, 13],
    [4, 5],
  ])
);

console.log(
  sumFractions([
    [36, 4],
    [22, 60],
  ]),
  9
);
console.log(
  sumFractions([
    [-11, 12],
    [18, 13],
    [4, 5],
  ]),
  1
);
console.log(
  sumFractions([
    [11, 12],
    [18, 13],
    [4, 5],
  ]),
  3
);
console.log(
  sumFractions([
    [18, 13],
    [4, 5],
  ]),
  2
);
console.log(
  sumFractions([
    [41, 14],
    [10, 91],
  ]),
  3
);
console.log(
  sumFractions([
    [11, 2],
    [3, 4],
    [5, 4],
    [21, 11],
    [12, 6],
  ]),
  11
);
