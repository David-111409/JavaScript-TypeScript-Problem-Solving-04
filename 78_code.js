/*
mauriceWins([3, 5, 10], [4, 7, 11]) ➞ true
// Since the matches are (3, 11), (5, 4) and (10, 7), Maurice wins 2 out of 3.

mauriceWins([6, 8, 9], [7, 12, 14]) ➞ false
// Since the matches are (6, 14), (8, 7) and (9, 12), Steve wins 2 out of 3.

mauriceWins([1, 8, 20], [2, 9, 100]) ➞ true
*/

function mauriceWins([s, m, f], [S, M, F]) {
  return +(s > F) + +(m > S) + +(f > M) >= 2;
}

console.log(mauriceWins([3, 5, 10], [4, 7, 11]), true);
console.log(mauriceWins([6, 8, 9], [7, 12, 14]), false);
console.log(mauriceWins([1, 8, 20], [2, 9, 100]), true);
console.log(mauriceWins([1, 2, 3], [2, 3, 4]), false);
console.log(mauriceWins([2, 4, 10], [3, 9, 11]), true);
console.log(mauriceWins([3, 8, 13], [5, 11, 15]), true);

/**
 Simon Says

Create a function that takes in two arrays and returns true if the second array follows the first array by one element, and false otherwise. 
In other words, determine if the second array is the first array shifted to the right by 1.
Examples

simonSays([1, 2], [5, 1]) ➞ true

simonSays([1, 2], [5, 5]) ➞ false

simonSays([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]) ➞ true

simonSays([1, 2, 3, 4, 5], [5, 5, 1, 2, 3]) ➞ false
 */

function simonSays(arr1, arr2) {
  {
    // It is the first solution for that problem.
    // let first = arr1.slice(0, -1);
    // let second = arr2.slice(1);
    // return JSON.stringify(first) === JSON.stringify(second);
  }
  {
    // It is the second solution for that problem.
    let l = arr1.length - 1;
    for (let i = 0; i < l; i++) {
      if (arr1[i] !== arr2[i + 1]) {
        return false;
      }
    }
    return true;
  }
}

console.log(simonSays([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]), true);

console.log(simonSays([1, 2, 3, 4, 5], [5, 5, 1, 2, 3]), false);

console.log(simonSays([1, 2], [5, 1]), true);

console.log(simonSays([1, 2], [5, 5]), false);

console.log(simonSays([1, 2, 3], [0, 1, 2]), true);
