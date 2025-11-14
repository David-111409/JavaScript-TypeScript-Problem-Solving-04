// function reverseString(str) {
//   let left = 0,
//     right = str.length - 1;
//   let ar = str.split("");
//   while (left < right) {
//     [ar[left], ar[right]] = [ar[right], ar[left]];
//     left++;
//     right--;
//   }
//   return ar.join(""); //return str.split("").reverse().join("");
// }

// console.log(reverseString("hello"));
// console.log(reverseString("Hello world for your girl"));

// function reverseWords(str) {
//   return str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }

// console.log(reverseWords("hello world for your girl"));

// function rev(str) {
//   return str.split(" ").reverse().join(" ");
// }
// console.log(rev("Hello, Wolrd!"));
// console.log(rev("I love coding."));
// console.log(rev("WoW! This is amazing!"));

/*
137. Single Number II
Medium
Topics
premium lock iconCompanies

Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,3,2]
Output: 3

Example 2:

Input: nums = [0,1,0,1,0,1,99]
Output: 99

 

Constraints:

    1 <= nums.length <= 3 * 104
    -231 <= nums[i] <= 231 - 1
    Each element in nums appears exactly three times except for one element which appears once.

*/

// function singleNumber(ar) {
//   let map = new Map();
//   for (let i = 0; i < ar.length; i++) {
//     map.set(ar[i], (map.get(ar[i]) || 0) + 1);
//   }
//   for (let [key, value] of map) {
//     if (value === 1) {
//       return key;
//     }
//   }
// }

// console.log(singleNumber([2, 2, 999, 2, 0, 0, 0]));

var isValid = function (s) {
  let matching = { ")": "(", "]": "[", "}": "{" };
  let stack = [];
  for (let e of s) {
    if ("({[".includes(e)) {
      stack.push(e);
    } else if (stack.pop() !== matching[e]) {
      return false;
    }
  }
  return stack.length === 0;
};
console.log(isValid("[()[][]()]"));
