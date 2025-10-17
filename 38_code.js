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
