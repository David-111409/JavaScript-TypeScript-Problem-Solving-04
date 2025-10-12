/*
isFloatingCharacter("12.12") ➞ true

isFloatingCharacter("12.") ➞ false

isFloatingCharacter(".1") ➞ true

isFloatingCharacter("-.1") ➞ true

isFloatingCharacter("abc") ➞ false
 */

const isFloatingCharacter = (char) => {
  return /^-?\d*\.\d+$/.test(char);
};

console.log(isFloatingCharacter("-12.12"), true);
console.log(isFloatingCharacter("-.12"), true);
console.log(isFloatingCharacter("0.12"), true);
console.log(isFloatingCharacter(".122332"), true);
console.log(isFloatingCharacter("av0.12"), false);
console.log(isFloatingCharacter("-."), false);
console.log(isFloatingCharacter("+"), false);
console.log(isFloatingCharacter("12"), false);
