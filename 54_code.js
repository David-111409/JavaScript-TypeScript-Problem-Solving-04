const obj = { two: 2 };

var { one = 1, two } = obj;

console.log(one, two); // outputs 1 2

console.log(one, 1, "The variable one must equal 1");
console.log(two, 2, "The variable two must equal 2");

/*
Write a function that returns true if an object is empty, and false otherwise.

Examples

isEmpty({}) ➞ true

isEmpty({ a: 1 }) ➞ false
*/

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmpty({}), true);
console.log(isEmpty({ a: 1 }), false);
console.log(isEmpty({ z: 2, w: 4, y: 5 }), false);
