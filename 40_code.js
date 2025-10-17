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
