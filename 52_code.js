// give me a code to sum all the numbers in an array with reduce
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// give me a code to filter out all the even numbers in an array with filter
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// give me a code to find the largest number in an array with reduce
function findLargestNumber(arr) {
  return arr.reduce((acc, curr) => (acc > curr ? acc : curr), arr[0]);
}
// give me a code to find the smallest number in an array with reduce
function findSmallestNumber(arr) {
  return arr.reduce((acc, curr) => (acc < curr ? acc : curr), arr[0]);
}

/*
Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan 
which have class properties of the following:

BasicPlan	StandardPlan	PremiumPlan
✓	✓	✓	canStream
✓	✓	✓	canDownload
✓	✓	✓	hasSD
✓	✓	hasHD
✓	hasUHD
1	2	4	numOfDevices
$8.99	$12.99	$15.99	price
Examples

BasicPlan.hasSD ➞ true 

PremiumPlan.hasSD ➞ true

BasicPlan.hasUHD ➞ false

BasicPlan.price ➞ '$8.99'

PremiumPlan.numOfDevices ➞ 4
*/

class BasicPlan {
  static canStream = true;
  static canDownload = true;
  static hasSD = true;
  static hasHD = false;
  static hasUHD = false;
  static numOfDevices = 1;
  static price = "$8.99";
}

class StandardPlan extends BasicPlan {
  static hasHD = true;
  static price = "$12.99";
}

class PremiumPlan extends StandardPlan {
  static hasUHD = true;
  static numOfDevices = 4;
  static price = "$15.99";
}

console.log(BasicPlan.canStream, true);
console.log(BasicPlan.canDownload, true);

console.log(BasicPlan.numOfDevices, 1);
console.log(BasicPlan.hasSD, true);

console.log(BasicPlan.hasHD, false);
console.log(BasicPlan.hasUHD, false);

console.log(BasicPlan.price, "$8.99");
console.log(
  StandardPlan.canStream,
  true,
  "Remember to add the StandardPlan class!"
);

console.log(StandardPlan.canDownload, true);
console.log(StandardPlan.numOfDevices, 2);

console.log(StandardPlan.hasSD, true);
console.log(StandardPlan.hasHD, true);

console.log(StandardPlan.hasUHD, false);
console.log(StandardPlan.price, "$12.99");

console.log(
  PremiumPlan.canStream,
  true,
  "Remember to add the PremiumPlan class!"
);

console.log(PremiumPlan.canDownload, true);
console.log(PremiumPlan.numOfDevices, 4);

console.log(PremiumPlan.hasSD, true);
console.log(PremiumPlan.hasHD, true);

console.log(PremiumPlan.hasUHD, true);
console.log(PremiumPlan.price, "$15.99");

/*
Not Not Not True
Something which is not true is false, but something which is not not true is true! 
Create a function where given n number of "not", evaluate whether it's true or false.

Examples

notNotNot(1, true) ➞ false
// Not true

notNotNot(2, false) ➞ false
// Not not false

notNotNot(6, true) ➞ true
// Not not not not not not true
*/

function notNotNot(n, val) {
  return n % 2 ? !val : val;
}

console.log(notNotNot(1, true), false);
console.log(notNotNot(2, false), false);
console.log(notNotNot(7, true), false);
console.log(notNotNot(7, false), true);
console.log(notNotNot(3, true), false);
console.log(notNotNot(13, true), false);
console.log(notNotNot(24, false), false);
console.log(notNotNot(6, false), false);

/*
Is the String in Order?
Create a function that takes a string and returns true or false, depending on whether the characters are in order or not.

Examples

isInOrder("abc") ➞ true

isInOrder("edabit") ➞ false

isInOrder("123") ➞ true

isInOrder("xyzz") ➞ true
Notes

You don't have to handle empty strings.
*/

function isInOrder(str) {
  let arr = str.split("");
  arr.sort();
  let sortedStr = arr.join("");
  return str === sortedStr;
}

console.log(isInOrder("abc"), true);
console.log(isInOrder("edabit"), false);

console.log(isInOrder("xyz"), true);

console.log(isInOrder("xyzz"), true);
console.log(isInOrder("123"), true);

console.log(isInOrder("321"), false);
