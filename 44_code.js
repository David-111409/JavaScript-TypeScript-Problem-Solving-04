let nameGen = function(name){
    return `Hello, ${name}!`;
}("david");

console.log(nameGen); // Hello, david!

(function(){
    let count = 2;
    console.log(`Count is :: ${count}`);
})(); // Count is: 0

function makeRug(len, width, char = "#") {
  //   let ar = [];
  //   for (let i = 0; i < len; i++) {
  //     ar[i] = char.repeat(width);
  //   }
  //   return ar;
  return Array(len).fill(char.repeat(width));
}

console.log(makeRug(3, 5));
console.log(makeRug(3, 5, "$"));
console.log(makeRug(2, 2, "A"));
console.log(makeRug(2, 1, "bcb"), ["bcb", "bcb"]);

/*
countCharacters([
  "###",
  "###",
  "###"
]) ➞ 9

countCharacters([
  "22222222",
  "22222222",
]) ➞ 16

countCharacters([
  "------------------"
]) ➞ 18

countCharacters([]) ➞ 0

countCharacters(["", ""]) ➞ 0
 */

function countCharacters(arr) {
  return arr.reduce((acc, cur) => acc + cur.length, 0);
}

console.log(countCharacters(["###", "###", "###"]), 9);

console.log(countCharacters(["22222222", "22222222"]), 16);

console.log(countCharacters(["------------------"]), 18);

console.log(countCharacters([]), 0);

console.log(countCharacters(["", ""]), 0);
