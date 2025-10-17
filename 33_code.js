{
const a = [1, 2, 3];
const b = a.slice(); // Create a shallow copy of array a
b[0] = 0; // Modify the first element of array b

console.log(a, b); // [1, 2, 3 ] [0, 2, 3]
}

{
  let a = 5;
  let b = a++; // b = 5, a = 6
  console.log(a + b); // 11
}

{
  let nums = [1, 2, 3, 4];
  delete nums[1];
  console.log(nums, nums.length); //array = [1, empty, 3, 4] , length = 4
}

{
  let nums = [1, 2, 3].push(2, 3);
  console.log(nums);

  let x = [20, 1, 3].sort(); // [1, 20, 3]
  let rev = [2, 1, 3].reverse();

  console.log(x, rev);
  console.log(1 + false); // 1
  console.log(1 + true); // 2
  console.log(1 - false); // 1
  console.log(1 - true); // 0
  console.log(1 + null); // 1

  let arr = [1, 2, 3];
  let str = "1,2,3";
  console.log(arr == str); // true
  console.log(arr === str); // false
}

{
// var x = 10;
// {
//   var x = 20;
//   console.log(x); // Outputs: 20
// }
// console.log(x); // Outputs: 20 var is not a block scope variable

console.log(x); // undefined
var x = "hello";
console.log(x); // hello

console.log([1, 2, 3] + [1, 3, 4]); // 1,2,31,3,4
console.log("5" + 5); // 55
console.log("5" - 5); // 0
console.log("5" * 5); // 25
console.log("5" / 5); // 1
console.log("5" - "2"); // 3
console.log("5" * "2"); // 10
console.log("5" / "2"); // 2.5
console.log("5" + "2"); // 52
console.log("5" + 2); // 52
console.log("5" - 2); // 3
console.log("5" * 2); // 10

console.log(true + true); // 2
console.log(true + false); // 1
console.log(false + false); // 0
console.log(true - false); // 1
console.log(true * false); // 0
console.log(true * true); // 1
console.log(true / true); // 1
console.log(false / true); // 0
console.log(false / false); // NaN
  
console.log(1/ 0); // Infinity
console.log(-1/ 0); // -Infinity
console.log(0/ 0); // NaN
console.log("hello" - "world"); // NaN
console.log("hello" + "world"); // helloworld
  
console.log("hello" * "world"); // NaN
console.log("hello" / "world"); // NaN
console.log(null + 1); // 1
console.log(null - 1); // -1
console.log(null + "1"); // null1
console.log(undefined + 1); // NaN
console.log(undefined - 1); // NaN
console.log(undefined + "1"); // undefined1
console.log(NaN + 1); // NaN
  
console.log(NaN - 1); // NaN
console.log(NaN + "1"); // NaN1
console.log(NaN + NaN); // NaN
  
console.log(Infinity + 1); // Infinity
console.log(Infinity - 1); // Infinity
console.log(Infinity + "1"); // Infinity1
console.log(Infinity + Infinity); // Infinity
}
