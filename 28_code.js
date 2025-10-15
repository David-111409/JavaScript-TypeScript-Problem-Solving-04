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
