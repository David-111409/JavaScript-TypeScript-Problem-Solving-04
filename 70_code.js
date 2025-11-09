/*
Decimal to Binary Using Stack

Create a function that takes a decimal number and converts it to a binary number using Stack. The Stack is created for you.
Examples

toBinary(12) ➞ 1100

toBinary(0) ➞ 0

toBinary(101) ➞ 1100101

Notes

0 <= n <= 101
*/
class Stack {
  constructor(items) {
    this.items = items || [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  size() {
    return this.items.length;
  }
}

function toBinary(n) {
  const stack = new Stack();
  let binary = 0;
  
  while (n > 0) {
    stack.push(n % 2);
    n = Math.floor(n / 2);
  }
  
  while (stack.size()) {
    binary = binary * 10 + stack.pop();
  }
  return binary;
}

const notoString = (a) => !RegExp("toString").test(a);
console.log(notoString(toBinary), false, "The use of toString() is denied.");

console.log(toBinary(12) === 1100);
console.log(toBinary(4) === 100);
console.log(toBinary(0) === 0);
console.log(toBinary(5) === 101);
console.log(toBinary(6) === 110);
console.log(toBinary(3) === 11);
console.log(toBinary(7) === 111);
console.log(toBinary(100) === 1100100);
console.log(toBinary(101) === 1100101);
console.log(toBinary(8) === 1000);
