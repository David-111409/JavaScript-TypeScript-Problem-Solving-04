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

/*
Create a function to extract the name of the subreddit from its URL.

Examples

subReddit("https://www.reddit.com/r/funny/") ➞ "funny"

subReddit("https://www.reddit.com/r/relationships/") ➞ "relationships"

subReddit("https://www.reddit.com/r/mildlyinteresting/") ➞ "mildlyinteresting"
*/

const subReddit = (url) => url.match(/(?<=\/r\/)\w+(?=\/$)/i)[0];

console.log(subReddit("https://www.reddit.com/r/funny/"));
console.log(
  subReddit("https://www.reddit.com/r/relationships/"),
  "relationships"
);
console.log(
  subReddit("https://www.reddit.com/r/mildlyinteresting/"),
  "mildlyinteresting"
);
console.log(subReddit("https://www.reddit.com/r/funny/"), "funny");
console.log(
  subReddit("https://www.reddit.com/r/CrappyDesign/"),
  "CrappyDesign"
);
console.log(subReddit("https://www.reddit.com/r/confession/"), "confession");
console.log(subReddit("https://www.reddit.com/r/AskMen/"), "AskMen");
console.log(subReddit("https://www.reddit.com/r/comics/"), "comics");
console.log(subReddit("https://www.reddit.com/r/lifehacks/"), "lifehacks");
console.log(
  subReddit("https://www.reddit.com/r/wholesomememes/"),
  "wholesomememes"
);
console.log(
  subReddit("https://www.reddit.com/r/iamverysmart/"),
  "iamverysmart"
);
console.log(
  subReddit("https://www.reddit.com/r/starterpacks/"),
  "starterpacks"
);
console.log(subReddit("https://www.reddit.com/r/awww/"), "awww");
