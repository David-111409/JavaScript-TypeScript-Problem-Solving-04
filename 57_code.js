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
