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

/*
Reversible Inclusive List Ranges
Write a function that, given the start and end values, 
returns an array containing all the numbers inclusive to that range. See examples below.

Examples

reversibleInclusiveList(1, 5) ➞ [1, 2, 3, 4, 5]

reversibleInclusiveList(2, 8) ➞ [2, 3, 4, 5, 6, 7, 8]

reversibleInclusiveList(10, 20) ➞[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

reversibleInclusiveList(24, 17) ➞[24, 23, 22, 21, 20, 19, 18, 17]
Notes

The sort order of the resulting array is dependent of the input values.
All inputs provided in the test scenarios are valid.
If start is greater than end, return a descendingly sorted array, otherwise, ascendingly sorted.
A recursive version of this challenge can be found here.
*/

function reversibleInclusiveList(start, end) {
  let result = [];
  let k = 0;
  
  if (start < end) {
    for (let i = start; i <= end; i++) {
      result[k] = i;
      k++;
    }
  } else {
    for (let i = start; i >= end; i--) {
      result[k] = i;
      k++;
    }
  }

  return result;
}

let [actualParam, expectedParam] = [
  [
    [5, 1],
    [6, 2],
    [10, 20],
    [24, 17],
    [40, 50],
    [51, 41],
    [11, 66],
    [9, 3],
    [6, 16],
  ],
  [
    [5, 4, 3, 2, 1],
    [6, 5, 4, 3, 2],
    [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [24, 23, 22, 21, 20, 19, 18, 17],
    [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41],
    [
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
      29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
      47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64,
      65, 66,
    ],
    [9, 8, 7, 6, 5, 4, 3],
    [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  ],
];
for (let i in actualParam)
  console.log(reversibleInclusiveList(...actualParam[i]), expectedParam[i]);
