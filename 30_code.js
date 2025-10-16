let obj = {age: 30};

let {age : myAge} = obj;

console.log(myAge); // 30
console.log(obj.age); // 30
//console.log(age); // ReferenceError: age is not defined

// What is the difference between pop and shift in JavaScript?
// pop removes the last element from an array and returns that element.
// shift removes the first element from an array and returns    that element.
// Both methods modify the original array.
let arr = [1, 2, 3, 4, 5];
console.log(arr.pop()); // 5
console.log(arr); // [1, 2, 3, 4]
console.log(arr.shift()); // 1
console.log(arr); // [2, 3, 4]
