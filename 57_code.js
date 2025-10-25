/*
Create a function that returns true if an asterisk * is inside a box.

Examples

inBox([
  "###",
  "#*#",
  "###"
]) ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) ➞ true

inBox([
  "*####",
  "# #",
  "#  #*",
  "####"
]) ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) ➞ false
*/

function inBox(ar) {
  let l = ar.length - 1;
  for (let i = 1; i < l; i++) {
    if (/^#\s*[*]{1,}\s*#$/.test(ar[i])) {
      return true;
    }
  }
  return false;
}

console.log(inBox(["###", "# #", "###"]), false);

console.log(inBox(["####", "#  #", "#  #", "####"]), false);

console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"]), false);

console.log(inBox(["###", "#*#", "###"]), true);

console.log(inBox(["####", "# *#", "#  #", "####"]), true);

console.log(inBox(["#####", "#  *#", "#   #", "#   #", "#####"]), true);

console.log(inBox(["#####", "#   #", "# * #", "#   #", "#####"]), true);

console.log(inBox(["#####", "#   #", "#   #", "# * #", "#####"]), true);

console.log(inBox(["#####", "#*  #", "#   #", "#   #", "#####"]), true);

console.log(inBox(["*####", "# #", "#  #*", "####"])); // ➞ false

/*
Create a function that takes multidimensional array,
 converts into one dimensional array and returns it using recursion.

Examples

flatten([[17.2, 5, "code"]]) ➞ [17.2, 5, "code"]

flatten([[[[[2, 14, "rubber"]]], 2, 3, 4]])) ➞ [2, 14, "rubber", 2, 3, 4]

flatten([["balkot"]]) ➞ ["balkot"]
*/

// function flatten(arr) {
//   let result = [];
//   let l = arr.length;
//   for (let i = 0; i < l; i++) {
//     if (Array.isArray(arr[i])) {
//       result = [...result, ...flatten(arr[i])];
//     } else {
//       result.push(arr[i]);
//     }
//   }
  
//   return result;
// }

function flatten(ar) {
  return ar.reduce(
    (acc, val) => (Array.isArray(val) ? [...acc, ...flatten(val)] : [...acc, val]),
    []
  );
}

console.log(flatten([1, [2, [3, [4], [[[5]]]]]]));
// ➞ [1, 2, 3, 4, 5]
console.log(flatten([[17.2, 5, "code", [[[["Hello"]]]]]])); //[17.2, 5, "code"])
console.log(flatten([[17.2, 5, "edabit"]]), [17.2, 5, "edabit"]);
console.log(flatten([[[[[2, 14, "rubber"]]], 2, 3, 4]]), [
  2,
  14,
  "rubber",
  2,
  3,
  4,
]);
console.log(flatten([0, [12, "biratnagar", [[2]]]]), [0, 12, "biratnagar", 2]);
console.log(flatten([["balkot"]]), ["balkot"]);
console.log(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);

/*
noYelling("What went wrong?????????") ➞ "What went wrong?"

noYelling("Oh my goodness!!!") ➞ "Oh my goodness!"

noYelling("I just!!! can!!! not!!! believe!!! it!!!") ➞ "I just!!! can!!! not!!! believe!!! it!"
// Only change repeating punctuation at the end of the sentence.

noYelling("Oh my goodness!") ➞ "Oh my goodness!"
// Do not change sentences where there exists only one or zero exclamation marks/question marks.

noYelling("I just cannot believe it.") ➞ "I just cannot believe it."
*/

function noYelling(str) {
  if (/[!?]{2,}$/.test(str)) {
    return noYelling(str.slice(0, -1));
  }
  
  return str;
}

console.log(noYelling("What went wrong?????????") === "What went wrong?");
console.log(noYelling("Oh my goodness!!!") === "Oh my goodness!");
console.log(noYelling("WHAT!") === "WHAT!");

console.log(noYelling("WHAT?") === "WHAT?");
console.log(noYelling("Oh my goodness!") === "Oh my goodness!");
console.log(
  noYelling("I just cannot believe it.") === "I just cannot believe it."
);

console.log(
  noYelling("I just!!! can!!! not!!! believe!!! it!!!") ===
    "I just!!! can!!! not!!! believe!!! it!"
);
console.log(
  noYelling("That's a ton!! of cheese!!!!") === "That's a ton!! of cheese!"
);

/*
wordFrequency("I love JavaScript and I love coding");
// ➞ { i: 2, love: 2, javascript: 1, and: 1, coding: 1 }
*/
function wordFrequency(str) {
  let arr = str.split(" ");

  return arr.reduce((acc, word) => {
    word = word.toLowerCase();
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
}

console.log(
  wordFrequency(
    "I love JavaScript and I love the coding and love the way it works"
  )
);

/*
unique([1, 2, 2, 3, 4, 4, 5]);
// ➞ [1, 2, 3, 4, 5]
*/

function unique(arr) {
  //   return arr.filter((n, index) => arr.indexOf(n) === index); // time o(n ^ 2)
  //   return [...new Set(arr)]; // time o(n)
  //   return Array.from(new Set(arr)); // time o(n)
  let st = new Set();
  
  return Array.from(
    arr.reduce((acc, n) => {
      if (!st.has(n)) {
        acc.add(n);
      }
      return acc;
    }, st)
  );
}

console.log(unique([1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 7]));
