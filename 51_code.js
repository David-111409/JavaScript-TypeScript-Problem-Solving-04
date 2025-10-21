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
