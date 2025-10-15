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
