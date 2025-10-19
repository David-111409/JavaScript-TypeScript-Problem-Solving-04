/*
Find Unique Number in Array
Create a function that takes an array of integers as an argument and returns a unique number from that array. 
All numbers except unique ones have the same number of occurrences in the array.

Examples

findSingleNumber([2, 2, 2, 3, 4, 4, 4]) ➞ 3

findSingleNumber([2]) ➞ 2

findSingleNumber([]) ➞ null

findSingleNumber([7, 13, 3, 6, 5, 4, 4, 13, 5, 3, 6, 7, 6, 5, 3, 13, 4, 7, 13, 5, 7, 4, 3, 6, 8, 4, 3, 7, 5, 6, 13]) ➞ 8

findSingleNumber([1, 2, 3, 6, 5, 4, 4, 2, 5, 3, 6, 1, 6, 5, 3, 2, 4, 1, 2, 5, 1, 4, 3, 6, 101, 4, 3, 1, 5, 6, 2]) ➞ 101
*/

function findSingleNumber(arr) {
  if (arr.length === 0) return null;

  let result = 0;

  for (let num of arr) {
    result ^= num;
  }

  return result;
}

console.log(findSingleNumber([2, 2, 2, 3, 4, 4, 4]), 3);
console.log(findSingleNumber([415]), 415);
console.log(findSingleNumber([]), null);
console.log(
  findSingleNumber([
    7, 13, 3, 6, 5, 4, 4, 13, 5, 3, 6, 7, 6, 5, 3, 13, 4, 7, 13, 5, 7, 4, 3, 6,
    8, 4, 3, 7, 5, 6, 13,
  ]),
  8
);
console.log(
  findSingleNumber([
    1, 2, 3, 6, 5, 4, 4, 2, 5, 3, 6, 1, 6, 5, 3, 2, 4, 1, 2, 5, 1, 4, 3, 6, 101,
    4, 3, 1, 5, 6, 2,
  ]),
  101
);
console.log(findSingleNumber([1, 2, 2, 3, 3]), 1);
console.log(
  typeof findSingleNumber([243, 70, 18, 60, 284, 148, 418, 360, 727, 791, 325]),
  "number"
);
console.log(
  findSingleNumber([
    364, 938, 123, 686, 111, 227, 802, 667, 35, 858, 364, 938, 123, 686, 111,
    227, 802, 667, 35, 858, 364, 938, 123, 686, 111, 227, 802, 667, 35, 858,
    364, 938, 123, 686, 111, 227, 802, 667, 35, 858, 364, 938, 123, 686, 111,
    227, 802, 667, 35, 858, 497,
  ]),
  497
);
console.log(
  findSingleNumber([
    116, 621, 698, 894, 96, 630, 291, 327, 911, 350, 116, 621, 698, 894, 96,
    630, 291, 327, 911, 350, 521,
  ]),
  521
);

function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => returns "(123) 456-7890"
