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

function flatten(arr) {
  let result = [];
  let l = arr.length;
  for (let i = 0; i < l; i++) {
    if (Array.isArray(arr[i])) {
      result = [...result, ...flatten(arr[i])];
    } else {
      result.push(arr[i]);
    }
  }
  
  return result;
}
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
