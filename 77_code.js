/*
funnyNumbers(89, 1) ➞ 1
// since 8¹ + 9² = 89 = 89 * 1

funnyNumbers(92, 1) ➞ null
// since there is no k such as 9¹ + 2² equals 92 * k

funnyNumbers(695, 2) ➞ 2
// 6² + 9³ + 5⁴= 1390 = 695 * 2
*/
function funnyNumbers(n, p) {
  // let sum = 0;
  let num = [...String(n)];
  // for (let _ of num) {
  //   sum += Math.pow(+_, p++);
  // }
  const sum = num.reduce((acc, cur) => acc + Math.pow(+cur, p++), 0);
  const k = sum / n;
  return Number.isInteger(k) ? k : null;
}

console.log(funnyNumbers(89, 1));
console.log(funnyNumbers(92, 1));
console.log(funnyNumbers(695, 2));
console.log(funnyNumbers(89, 1), 1);
console.log(funnyNumbers(92, 1), null);
console.log(funnyNumbers(46288, 3), 51);
console.log(funnyNumbers(114, 3), 9);
console.log(funnyNumbers(46288, 5), null);
console.log(funnyNumbers(135, 1), 1);
console.log(funnyNumbers(175, 1), 1);
console.log(funnyNumbers(518, 1), 1);
console.log(funnyNumbers(598, 1), 1);
console.log(funnyNumbers(1306, 1), 1);
console.log(funnyNumbers(2427, 1), 1);
console.log(funnyNumbers(2646798, 1), 1);
console.log(funnyNumbers(3456789, 1), null);
console.log(funnyNumbers(3456789, 5), null);
console.log(funnyNumbers(198, 1), 3);
console.log(funnyNumbers(249, 1), 3);
console.log(funnyNumbers(1377, 1), 2);
console.log(funnyNumbers(1676, 1), 1);
console.log(funnyNumbers(695, 2), 2);
console.log(funnyNumbers(1878, 2), 19);
console.log(funnyNumbers(7388, 2), 5);
console.log(funnyNumbers(47016, 2), 1);
console.log(funnyNumbers(542186, 2), 1);
console.log(funnyNumbers(261, 3), 5);
console.log(funnyNumbers(1385, 3), 35);
console.log(funnyNumbers(2697, 3), 66);
console.log(funnyNumbers(6376, 3), 10);
console.log(funnyNumbers(6714, 3), 1);
console.log(funnyNumbers(63760, 3), 1);
console.log(funnyNumbers(63761, 3), 1);
console.log(funnyNumbers(132921, 3), 4);
console.log(funnyNumbers(10383, 6), 12933);
