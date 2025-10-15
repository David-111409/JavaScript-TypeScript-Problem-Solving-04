console.log(typeof null); // "object"
console.log(typeof undefined); // "undefined"
console.log(typeof []); // "object"
console.log(typeof {}); // "object"

console.log(typeof function() {}); // "function"
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"

console.log(typeof Symbol("sym")); // "symbol"
console.log(typeof BigInt(9007199254741991n)); // "bigint"
console.log(typeof NaN); // "number"
console.log(typeof Infinity); // "number"

console.log(typeof -Infinity); // "number"
console.log(typeof new Date()); // "object"
console.log(typeof /regex/); // "object"

console.log(typeof new Map()); // "object"
console.log(typeof new Set()); // "object"
console.log(typeof new WeakMap()); // "object"

console.log(typeof new WeakSet()); // "object"
console.log(typeof new Error("error")); // "object"
console.log(typeof Math); // "object"

console.log(typeof JSON); // "object"
console.log(typeof arguments); // "object"
console.log(typeof Promise.resolve()); // "object"

let x = 123;
let y = new Number(123);
console.log(x === y); // false

let str = "hello";
let another = new String("hello");
console.log(str === another, str == another); // false true
console.log(typeof str); // "string"
console.log(typeof another); // "object"

console.log(another instanceof String); // true
console.log(another instanceof Object); // true
console.log(str instanceof String); // false

console.log(typeof String, typeof Number, typeof Boolean); // "function function function"
console.log(typeof Math, typeof JSON); // "object object"

console.log(+null, Number(null), +NaN); // 0 0 NaN
console.log(+""); // 0
console.log(+"123"); // 123

console.log(+"123abc"); // NaN
console.log(+true); // 1
console.log(+false); // 0

console.log(+undefined); // NaN
console.log(+{}); // NaN
console.log(+[]); // 0

console.log(+[123]); // 123
console.log(+[1, 2, 3]); // NaN
console.log(+function(){}); // NaN
