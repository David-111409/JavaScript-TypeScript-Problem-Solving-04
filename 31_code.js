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
