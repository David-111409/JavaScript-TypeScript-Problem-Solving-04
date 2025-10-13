/**
 
 Write a RegExp that looks for all decimal numbers including integer ones, 

 with the floating point and negative ones.

 */

const REGEXP = /-?\d+(\.\d+)?/g;

let str = "-1.5 0 2 -123.4.";

console.log(str.match(REGEXP));


const validate = (REGEXP) => {
  // if(!//.test(String(REGEXP))) return () => "invalid"
  return function testReg(str) {
    return str.match(REGEXP);
  };
};

const testExp = validate(REGEXP);

console.log(testExp(str), ["-1.5", "0", "2", "-123.4"]);

/*
Cluster Vowels, Single Out Consonants
Write a function that takes in a word and splits the consonants one by one, but keeps the vowels in a cluster.

Examples

split("beautifully") ➞ ["b", "eau", "t", "i", "f", "u", "l", "l", "y"]

split("spoonful") ➞ ["s", "p", "oo", "n", "f", "u", "l"]

split("swimming") ➞ ["s", "w", "i", "m", "m", "i", "n", "g"]
 */
const split = (str) => str.match(/([aeiou]+)|[^aeiou]/g);

console.log(split("beautifully"), [
  "b",
  "eau",
  "t",
  "i",
  "f",
  "u",
  "l",
  "l",
  "y",
]);
console.log(split("spoonful"), ["s", "p", "oo", "n", "f", "u", "l"]);
console.log(split("swimming"), ["s", "w", "i", "m", "m", "i", "n", "g"]);
console.log(split("courage"), ["c", "ou", "r", "a", "g", "e"]);
console.log(split("cooing"), ["c", "ooi", "n", "g"]);
