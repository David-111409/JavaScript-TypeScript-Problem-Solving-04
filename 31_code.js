console.log([1] == 1); // true

console.log([1, 2] == "1,2"); // true
console.log([] == ""); // true
console.log([] == 0); // true
console.log([null] == 0, Number([null])); // true 0
console.log([undefined] == 0, Number([undefined])); // true NaN
console.log([null] == "", Number([null])); // true 0
console.log([undefined] == "", Number([undefined])); // true NaN
// Give me the reason why [undefined] == 0 is true.
console.log([undefined] == 0, Number([undefined])); // it is true  NaN

let {length} = "foo";
console.log(length); // 3
console.log("foo".length); // 3
console.log("foo"[1]); // o
console.log("foo"[4]); // undefined
console.log("foo".at(-1)); // 'o'

let { length } = "hello";
console.log(length);

{
  let a = [1, 2];
  let { length: len } = a;
  console.log(len);
}

{
  let a = [1, 2];
  let b = a;
  b.push(3);
  console.log(a); // [1, 2, 3]
}

{
const ar = [];
ar.push(1);
ar.push(2);
console.log(ar); // [1, 2]
ar = [3, 4];
console.log(ar); // error: Assignment to constant variable.
}

{
  let a = true;
  let b = true;
  let c = false;
  console.log((a && b) || c); // true
}

{
  let x = 10 + 20 * 3;
  console.log(x); // 70
  x = (10 + 20) * 3;
  console.log(x); // 90
}

const name = "kaheld";
age = 20;
console.log(name, age); // kaheld 20

console.log(delete name); // false
console.log(delete age); // true
// console.log(name); // kaheld
// console.log(age); // ReferenceError: age is not defined
