/**
 A Letter's Best Friend
Given a string, return if a given letter always appears immediately before another given letter.

Worked Example

bestFriend("he headed to the store", "h", "e") ➞ true

// All occurences of "h": ["he", "headed", "the"]
// All occurences of "h" have an "e" after it.
// Return true
Examples

bestFriend("he headed to the store", "h", "e") ➞ true

bestFriend("i found an ounce with my hound", "o", "u") ➞ true

bestFriend("we found your dynamite", "d", "y") ➞ false
Notes

Don't count letters with spaces between them (example #3).
All sentences will be given in lowercase.
 */

const bestFriend = (sent, first, second) => {
  let com = first + second;
  let re1 = new RegExp(com, "g");
  let re2 = new RegExp(first, "g");

  let l1 = sent.match(re1)?.length || 0;
  let l2 = sent.match(re2)?.length || 0;

  if (l1 === 0 && l2 === 0) {
    return false;
  } else {
    return l1 === l2;
  }
};

console.log(bestFriend("he headed to the store", "h", "e"), true);

console.log(bestFriend("i found an ounce with my hound", "o", "u"), true);

console.log(bestFriend("those were their thorns they said", "t", "h"), true);

console.log(bestFriend("we found your dynamite", "d", "y"), false);

console.log(bestFriend("look they took the cookies", "o", "o"), false);

console.log(bestFriend("go to edabit and meditate", "e", "d"), false);

console.log(bestFriend("go to abit an mitat", "e", "d"), false);

console.log(bestFriend("we found your dynamite", "d", "y")); // false
