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

{
let x = 10;
x = x++;
console.log(x);
// Give me the reason for that output?
// The output will be 10. 
// This is because the post-increment operator (x++) 
// returns the current value of x (which is 10) before incrementing it.
//  Therefore, the assignment x = x++ assigns the value 10 back to x, 
// and the incremented value is lost. As a result, x remains 10.
// Give me more examples like this?
let y = 5;
y = y++;
console.log(y); // Output: 5
let z = 20;
z = z++;
console.log(z); // Output: 20
// A different example with pre-increment operator
let a = 15;
a = ++a;
console.log(a); // Output: 16

// A more complex example
let b = 7;
b = b++ + ++b;
console.log(b); // Output: 16
// A more complex example with multiple increments
let c = 3;
c = c++ + c++ + ++c; 
console.log(c); // Output: 13 3 + 4 + 6 = 13
// Give me a more complex example?
let d = 4;
d = d++ + ++d + d++;
console.log(d);  // 16
// Give me a more complex example with different operators?
let e = 2;
e = e++ * ++e + e-- - --e;
console.log(e); // Output: 10
}
