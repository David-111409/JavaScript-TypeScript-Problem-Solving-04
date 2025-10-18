let x = { a: undefined, b: null };
console.log(JSON.stringify(x)); // { "b" : null}

let y = {c:NaN};
console.log(JSON.stringify(y)); // {"c":null}

let x = "5";
let y = true;

console.log(x + y); // "5true"
console.log(typeof (x + y)); // "string" 
console.log(x * y); // 5

console.log(typeof (x * y)); // "number"
console.log(x - y); // 4
console.log(typeof (x - y)); // "number"

console.log(+true); // 1
console.log(+"123"); // 123 of number type
console.log(+false); // 0

console.log(+"hello"); // NaN
console.log(+null); // 0

var z = 1,
  y = (z = typeof y);
console.log(y, z); // "undefined", "undefined"

let list = [1, 2, 3].push(5);
console.log(list); // 4
// console.log(list.push(6)); // TypeError: list.push is not a function

// console.log(fun()); // error fun is not a function
// var fun = function () {
//   return "hello";
// };

console.log(fun()); // ouput : "hello from function declaration"

function fun() {
  return "hello from function declaration";
}
