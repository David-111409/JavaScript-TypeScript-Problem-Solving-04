// function reverseString(str) {
//   let stack = [];
//   let reverse = "";
//   for (let char of str) {
//     stack.push(char);
//   }
//   while (stack.length) {
//     reverse += stack.pop();
//   }
//   return reverse;
// }

// console.log(reverseString("hello"));
// function reverseVowels(str) {
//   let vowels = [];
//   let result = "";
//   let len = str.length;
//   let i  = 0;

//   for (let char of str){
//     if ("aeiouAEIOU".includes(char)) {
//       vowels.push(char);
//     }
//   }
//   while (i < len) {
//     if ("aeiouAEIOU".includes(str[i])) {
//       result += vowels.pop();
//     }
//     else {
//       result += str[i];
//     }
//     i++;
//   }
//   return result;
// }

// console.log(reverseVowels("hello dawoud"));
