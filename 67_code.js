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

function isBalanced(str) {
  let stack = [];

  for (let char of str) {
    if ("([{".includes(char)) {
      stack.push(char);
    } else if ("]})".includes(char)) {
      let element = stack.pop() + char;
      if (!(element === "()" || element === "[]" || element === "{}")) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// ✅ Basic valid cases
console.log(isBalanced("()"), true);
console.log(isBalanced("[]"), true);
console.log(isBalanced("{}"), true);

// ✅ Mixed valid cases
console.log(isBalanced("([])"), true);
console.log(isBalanced("{[()]}"), true);
console.log(isBalanced("({[]})"), true);
console.log(isBalanced("[({})]"), true);
console.log(isBalanced("{{[[(())]]}}"), true);

// ✅ Basic invalid cases
console.log(isBalanced("("), false);
console.log(isBalanced(")"), false);
console.log(isBalanced(")("), false);
console.log(isBalanced("(()"), false);
console.log(isBalanced("())"), false);

// ✅ Mixed invalid cases
console.log(isBalanced("([)]"), false);
console.log(isBalanced("{[}]"), false);
console.log(isBalanced("{[(])}"), false);
console.log(isBalanced("((({{{[[[]]]}}})))"), true); // tricky valid case
console.log(isBalanced("((({{{[[[]]]}}}))"), false);

// ✅ Empty or no bracket cases
console.log(isBalanced(""), true);
console.log(isBalanced("abc"), true);
console.log(isBalanced("abc(def)ghi"), true);
console.log(isBalanced("a[b{c(d)e}f]g"), true);

// ✅ Long complex cases
console.log(isBalanced("(()[]{({[]})})"), true);
console.log(isBalanced("{[()]}{[(])}"), false);
console.log(isBalanced("(([]){})[{}]"), true);

// ✅ Only one bracket in odd places
console.log(isBalanced("a("), false);
console.log(isBalanced("b]"), false);
console.log(isBalanced("c{d[e]f"), false);
console.log(isBalanced("([]{})]"), false);
