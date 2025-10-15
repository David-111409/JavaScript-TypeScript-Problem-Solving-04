{
  var a = 2;
  let b = 3;
  const c = 4;
}
console.log(a); // output: 2
//console.log(b, c); // error, error

if ([].length) {
  console.log("Hello"); // output: no output
}

if ([]) {
  console.log("true"); // output : "true"
}

console.log("2" > "10"); // true
console.log(2 > "10"); // false
console.log(1 + false); // 1
console.log(1 + true); // 2
console.log(1 - false); // 1
console.log(0.1 + 0.2 === 0.3); // false .30000000000004 === .3

let x = 10;
{
  let x = 20;
}

console.log("x =", x); // x = 10

var y = 2;

{
  var y = 10;
  console.log("y =", y); // 10
}

console.log("y =", y); // y = 10

console.log(NaN == NaN); // false

console.log(NaN === NaN); // false

console.log(+true); // 1
console.log(!"Sales"); // false

console.log([2, 4] * [1, 0]); // NaN

console.log([2] * [4]); // 2 * 4 = 8

console.log([2] * [4, 1]); // NaN
