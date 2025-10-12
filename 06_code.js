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


/*
 retrieve("A simple life is a happy life for me.") ➞ ["a", "is", "a"]

retrieve("Exercising is a healthy way to burn off energy.")
➞ ["exercising", "is", "a", "off", "energy"]

retrieve("The poor ostrich was ostracized.")
➞ ["ostrich", "ostracized"]

retrieve("")
➞ []
 */

function retrieve(sent) {
  let re = /\b[aeiou]\w*\b/gi;
  //   return sent.toLowerCase().match(re) || [];
  return sent.match(re)?.map((word) => word.toLowerCase()) || [];
}
console.log(retrieve("A simple life is a happy life for me."), [
  "a",
  "is",
  "a",
]);
console.log(retrieve("Exercising is a healthy way to burn off energy."), [
  "exercising",
  "is",
  "a",
  "off",
  "energy",
]);
console.log(retrieve("The poor ostrich was ostracized."), [
  "ostrich",
  "ostracized",
]);
console.log(retrieve(""), []);
