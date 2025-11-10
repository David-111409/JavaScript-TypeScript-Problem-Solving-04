/*
Create a function that returns the number of characters shared between two words.
Examples

sharedLetters("apple", "meaty") ➞ 2
// Since "ea" is shared between "apple" and "meaty".

sharedLetters("fan", "forsook") ➞ 1

sharedLetters("spout", "shout") ➞ 4
*/

function sharedLetters(first, second) {
  let stFirst = new Set(first);
  let stSecond = new Set(second);
  let count = 0;
  for (let letter of stSecond) {
    if (stFirst.has(letter)) {
      count++;
    }
  }
  return count;
}

console.log(sharedLetters("apple", "meaty"), 2);
console.log(sharedLetters("fan", "forsook"), 1);
console.log(sharedLetters("spout", "shout"), 4);
console.log(sharedLetters("took", "taken"), 2);
console.log(sharedLetters("mentor", "terminal"), 5);
console.log(sharedLetters("class", "last"), 3);
