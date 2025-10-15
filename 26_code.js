console.log(null || false || "hello"); // "hello"
console.log(null && false && "hello"); // null
console.log(false && null && "hello"); // false
console.log(null || true || "hello"); // true

let x = [1];
let y = [2];

console.log(x + y, typeof (x + y)); //"12", string
console.log(+x + +y, typeof (+x + +y)); //3, number

{
const x = [1, 2];
const y = "1,2";

console.log(x == y); // true
console.log(x === y); // false
}

{ 
const numbers = [1, 2, 3, 4, 5];
const [x, ...y] = numbers; // 1 [2, 3, 4, 5]

console.log(x, y);
}

let str = "abc" + +"def"; // abcNaN
console.log(str);

{
  let num = 0;
  console.log(num++); // 0
  console.log(++num); // 2
  console.log(num); // 2
}

console.log(0 || 1); // 1
console.log(1 || 2); // 1
console.log(0 && 1); // 0
console.log(1 && 2); // 2
console.log(5 || 1); // 5

console.log(data()); // error with var, and '1' with regular function

// function data() {
//   return "1";
// }
var data = function () {
  return "1";
};

// console.log(data()); // "1"
{
let x = 10;
x++;
console.log(x++, ++x); // 11 , 13
}

{
  const ar = [1, 2, 3];
  ar[3] = 6;
  console.log(ar.length); // 4
}
