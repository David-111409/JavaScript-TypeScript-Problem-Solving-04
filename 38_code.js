/*
longestTime(1, 59, 3598) ➞ 1

longestTime(2, 300, 15000) ➞ 300

longestTime(15, 955, 59400) ➞ 59400
*/

function longestTime(a, b, c) {
  let first = a * 60;
  let second = c / 60;
  if (first > b && first > second) {
    return a;
  } else if (b > first && b > second) {
    return b;
  } else {
    return c;
  }
}

console.log(longestTime(1, 59, 3598), 1);
console.log(longestTime(2, 300, 15000), 300);
console.log(longestTime(15, 955, 59400), 59400);


/*
isSastry(183) ➞ true
// Concatenation of n and its successor = 183184
// 183184 is a perfect square (428 ^ 2)

isSastry(184) ➞ false
// Concatenation of n and its successor = 184185
// 184185 is not a perfect square

isSastry(106755) ➞ true
// Concatenation of n and its successor = 106755106756
// 106755106756 is a perfect square (326734 ^ 2)
*/

function isSastry(n) {
  let result = `${n}${n + 1}`;
  let root = Math.sqrt(Number(result));

  return Number.isInteger(root);
}

console.log(isSastry(183)); // true
console.log(isSastry(184)); // false
console.log(isSastry(106755)); // true
console.log(isSastry(183), true, "Example #1");
console.log(isSastry(184), false, "Example #2");
console.log(isSastry(106755), true, "Example #3");
console.log(isSastry(129987253440921), false);
console.log(isSastry(157175907513603), true);
console.log(isSastry(206611570247935), true);
console.log(isSastry(338752188230098), false);
console.log(isSastry(433610247875715), true);
console.log(isSastry(652333983478884), false);
console.log(isSastry(718717107443715), true);
console.log(isSastry(752199872453889), false);
console.log(isSastry(786704531939448), true);
