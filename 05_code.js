/**
 countNumber([["", 17.2, 5, "edabit"]]) ➞ 2
// 17.2 and 5.

countNumber([[[[[2, 14]]], 2, 3, 4]]) ➞ 5
// 2, 14, 2, 3 and 4.

countNumber([["balkot"]]) ➞ 0
 */

const countNumber = (ar) => {
  //   return ar.flat(Infinity).filter((el) => typeof el === "number").length;
  let count = 0;
  
  for (let el of ar) {
    if (Array.isArray(el)) {
      count += countNumber(el);
    } else if (typeof el === "number") {
      count++;
    }
  }
  
  return count;
};

console.log(countNumber([["", 17.2, 5, "edabit"]]), 2);
console.log(countNumber([[[[[2, 14, "nepal"]]], 2, 3, 4]]), 5);
console.log(countNumber([0, [12, "biratnagar", [[2]]]]), 3);
console.log(countNumber([["balkot"]]), 0);
console.log(countNumber([1, 2, 3, 4, 5, 6]), 6);

/**
 firstNVowels("sharpening skills", 3) ➞ "aei"

firstNVowels("major league", 5) ➞ "aoeau"

firstNVowels("hostess", 5) ➞ "invalid"
 */

const firstNVowels = (sent, n) => {
 
  let vowels = sent.match(/[aeiou]/gi) || [];
 
  if (vowels.length < n) {
    return "invlaid";
  } 
  else {
    return vowels.slice(0, n).join("");
  }
};

console.log(firstNVowels("sharpening skills", 3), "aei");
console.log(firstNVowels("major league", 5), "aoeau");
console.log(firstNVowels("crabby patty", 2), "aa");
console.log(firstNVowels("shrimp", 1), "i");
console.log(firstNVowels("shrimpy", 2), "invalid");
console.log(firstNVowels("hostess", 5), "invalid");
