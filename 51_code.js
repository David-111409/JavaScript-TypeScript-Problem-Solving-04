/*
X and Y Coordinates
Create a function that converts two arrays of x- and y- coordinates into an array of (x, y) coordinates.

Examples

convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0])
➞ [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]

convertCartesian([9, 8, 3], [1, 1, 1])
➞ [[9, 1], [8, 1], [3, 1]]
Notes

x and y arrays will always be the same length.
*/
function convertCartesian(ar1, ar2) {
  //   let l = ar1.length;
  //   let ar = [];
  //   for (let i = 0; i < l; i++) {
  //     ar[i] = [ar1[i], ar2[i]];
  //   }
  //   return ar;
  return ar1.reduce((acc, cur, ind) => {
    acc.push([cur, ar2[ind]]);
    return acc;
  }, []);
}

console.log(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]), [
  [1, 5],
  [5, 8],
  [3, 9],
  [3, 1],
  [4, 0],
]);

console.log(convertCartesian([9, 8, 3], [1, 1, 1]), [
  [9, 1],
  [8, 1],
  [3, 1],
]);

console.log(convertCartesian([2, 5, 1], [7, 8, 9]), [
  [2, 7],
  [5, 8],
  [1, 9],
]);

console.log(convertCartesian([3, 2, 2], [6, 1, 7]), [
  [3, 6],
  [2, 1],
  [2, 7],
]);

/*
Create a function that finds all even numbers from 1 to the given number.

Examples

findEvenNums(8) ➞ [2, 4, 6, 8]

findEvenNums(4) ➞ [2, 4]

findEvenNums(2) ➞ [2]
*/

function findEvenNums(n) {
  let ar = [];
  
  for (let i = 2; i <= n; i += 2) {
    ar.push(i);
  }
  
  return ar;
}

console.log(findEvenNums(4), [2, 4]);
console.log(findEvenNums(8), [2, 4, 6, 8]);

console.log(findEvenNums(2), [2]);
console.log(findEvenNums(1), []);

console.log(findEvenNums(9), [2, 4, 6, 8]);
console.log(findEvenNums(11), [2, 4, 6, 8, 10]);
