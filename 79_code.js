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
