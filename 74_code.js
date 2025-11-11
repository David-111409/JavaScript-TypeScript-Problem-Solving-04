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

/*
import React from "react";
const Log = ({ name }) => {
  const [log, setLog] = React.useState(false);
  return (
    <>
      <button onClick={() => setLog(!log)}>
        click me to log {log ? "out" : "in"}
      </button>
      <h1>
        Hello, {name}. {log ? "You are loged in." : "You are not loged in."}
      </h1>
    </>
  );
};

function App() {
  return <Log name="Dawoud Bake alkaber" />;
}

export default App;
*/
/*
Total Number of Unique Characters

Given two strings, create a function that returns the total number of unique characters from the combined string.
Examples

countUnique("apple", "play") ➞ 5
// "appleplay" has 5 unique characters:
// "a", "e", "l", "p", "y"

countUnique("sore", "zebra") ➞ 7
// "sorezebra" has 7 unique characters:
// "a", "b", "e", "o", "r", "s", "z"

countUnique("a", "soup") ➞ 5
*/
function countUnique(str1, str2) {
  return new Set(str1 + str2).size;
}

console.log(countUnique("apple", "play"), 5);
console.log(countUnique("sore", "zebra"), 7);
console.log(countUnique("pip", "geeks"), 6);
console.log(countUnique("a", "soup"), 5);
console.log(countUnique("maniac", "maniac"), 5);

/*
Given any number of parameters, return true if none of the arguments are falsy.
Examples

nothingIsNothing(0, false, undefined, null) ➞ false

nothingIsNothing(33, "Hello",  true,  []) ➞ true

nothingIsNothing(true, false) ➞ false
*/
function nothingIsNothing(...args) {
  return args.every((arg) => arg);
}

console.log(nothingIsNothing(0, false, [], {}), false);
console.log(nothingIsNothing(33, "Hello", (true, true, 3)), true);
console.log(nothingIsNothing(true, null), false);
console.log(nothingIsNothing(null, null), false);
console.log(nothingIsNothing(221), true);
console.log(nothingIsNothing(221, 0, 0, 0), false);
console.log(nothingIsNothing([221, 0, 0, 0]), true);
