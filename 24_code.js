/*
An Absolute
Given a sentence, create a function that replaces every "a" as an article with "an absolute".
 It should return the same string without any change if it doesn't have any "a".

Examples

absolute("I am a champion!!!") ➞ "I am an absolute champion!!!"

absolute("Such an amazing bowler.") ➞ "Such an amazing bowler."

absolute("A man with no haters.") ➞ "An absolute man with no haters."
*/

const absolute = (str) => {
  return str.replace(/\ba\b/gi, (mat) => {
    if (mat === "A") {
      return "An absolute";
    } else {
      return "an absolute";
    }
  });
};

console.log(absolute("I am a champion!!!") === "I am an absolute champion!!!");

console.log(absolute("Such an amazing bowler.") === "Such an amazing bowler.");

console.log(absolute("A hero of the leaf") === "An absolute hero of the leaf");

console.log(
  absolute("That place is such a beauty") ===
    "That place is such an absolute beauty"
);

console.log(
  absolute("A man with no haters.") === "An absolute man with no haters."
);
