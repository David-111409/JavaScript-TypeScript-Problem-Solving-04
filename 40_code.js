console.log(new Boolean(false), typeof (0 % 0));
/*
Create a function that takes an array of numbers and return its median. 
If the input array is even length, take the average of the two medians, else, take the single median.

Examples

median([2, 5, 6, 2, 6, 3, 4]) ➞ 4

median([21.4323, 432.54, 432.3, 542.4567]) ➞ 432.4

median([-23, -43, -29, -53, -67]) ➞ -43
*/

function median(ar) {
  let l = ar.length;
  ar.sort((a, b) => a - b);
  if (l % 2 === 0) {
    return (ar[l / 2 - 1] + ar[l / 2]) / 2;
  } else {
    return ar[Math.floor(l / 2)];
  }
}

console.log(median([20, 40, 20, 30, 50, 60, 70, 0, 20]), 30);

console.log(median([342, 98, 5456, 32, 786, 432, 890, 321]), 387);
console.log(median([1, 0, 1, 0, 0, 0, 1, 1]), 0.5);

console.log(median([32, 5, 78, 32, 4, 5, 3]), 5);
console.log(median([-20, 40, 30, -2, 40, -13]), 14);

console.log(median([32786, 7837, 83736, 83736, 10383, 738393]), 58261);
console.log(median([7685, 83736, 38376, 73638, 7337]), 38376);

console.log(median([0, 0, 0, 0]), 0);
console.log(median([-30, -42, -60, -10, -30, -50]), -36);

console.log(median([238, 432, 897, 710]), 571);

/*
Iterated Square Root
The iterated square root of a number is the number of times the square root function must 
be applied to bring the number strictly under 2.

Given an integer, return its iterated square root. Return "invalid" if it is negative.

Examples

iSqrt(1) ➞ 0

iSqrt(2) ➞ 1

iSqrt(7) ➞ 2

iSqrt(27) ➞ 3

iSqrt(256) ➞ 4

iSqrt(-1) ➞ "invalid"
*/

class Solution {
  iSqrt(n) {
    if (n < 0) return "invalid";
    let count = 0;
    while (n >= 2) {
      n = Math.sqrt(n);
      count++;
    }
    return count;
  }
}

let sol = new Solution();

console.log(sol.iSqrt(1), 0, "Example 1");
console.log(sol.iSqrt(2), 1, "Example 2");
console.log(sol.iSqrt(7), 2, "Example 3");
console.log(sol.iSqrt(27), 3, "Example 4");
console.log(sol.iSqrt(256), 4, "Example 5");
console.log(sol.iSqrt(-1), "invalid", "Example 6");
console.log(sol.iSqrt(25), 3);
console.log(sol.iSqrt(59), 3);
console.log(sol.iSqrt(113), 3);
console.log(sol.iSqrt(253), 3);
console.log(sol.iSqrt(965), 4);
console.log(sol.iSqrt(999), 4);
console.log(sol.iSqrt(2746), 4);
console.log(sol.iSqrt(2872), 4);
console.log(sol.iSqrt(4069), 4);
console.log(sol.iSqrt(6575), 4);
console.log(sol.iSqrt(7985), 4);
console.log(sol.iSqrt(8385), 4);
console.log(sol.iSqrt(16943), 4);
console.log(sol.iSqrt(26749), 4);
console.log(sol.iSqrt(34665), 4);
console.log(sol.iSqrt(44591), 4);
console.log(sol.iSqrt(50320), 4);
console.log(sol.iSqrt(66343), 5);
console.log(sol.iSqrt(69420), 5);
console.log(sol.iSqrt(77632), 5);
console.log(sol.iSqrt(97197), 5);
console.log(sol.iSqrt(108787), 5);
console.log(sol.iSqrt(229276), 5);
console.log(sol.iSqrt(319228), 5);
console.log(sol.iSqrt(426748), 5);
console.log(sol.iSqrt(595996), 5);
console.log(sol.iSqrt(652940), 5);
console.log(sol.iSqrt(709442), 5);
console.log(sol.iSqrt(881414), 5);
console.log(sol.iSqrt(954281), 5);
console.log(sol.iSqrt(4294967296), 6);
console.log(sol.iSqrt(9852481428), 6);
console.log(sol.iSqrt(-198329), "invalid");
console.log(sol.iSqrt(-928437002), "invalid");
