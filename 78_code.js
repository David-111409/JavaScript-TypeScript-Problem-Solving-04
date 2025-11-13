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
