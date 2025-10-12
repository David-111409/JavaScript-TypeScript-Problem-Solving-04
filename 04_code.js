let txt = "We Love Programming And @ Because @ Is Amazing";
// console.log(txt.replace("@", "javaScript"));
// console.log(txt.replaceAll("@", "javaScript"));

let re = /@/g;
console.log(txt.replace(re, "java-script"));
console.log(txt.replace(/@/g, "java-script"));

/*

countAdverbs("She ate the lasagna heartily and noisily.") ➞ 2

countAdverbs("He hates potatoes.") ➞ 0

countAdverbs("He was happily, crazily, foolishly over the moon.") ➞ 3
 */

const countAdverbs = (sent) => {
  
  let adverbsCount = sent.match(/\b\w+ly\b/gi)?.length || 0;
  
  return adverbsCount;
};

console.log(countAdverbs("She ran hurriedly towards the stadium."), 1);

console.log(countAdverbs("She ate the lasagna heartily and noisily."), 2);

console.log(countAdverbs("He hates potatoes."), 0);

console.log(
  countAdverbs("He was happily, crazily, foolishly over the moon."),
  3
);

console.log(countAdverbs("She writes poetry beautifully."), 1);

console.log(countAdverbs("There are many fat geese in the park."), 0);

console.log(countAdverbs("The horse acted aggressively and stubbornly."), 2);

console.log(
  countAdverbs("She forgot where to buy the lysol."),
  0,
  "-ly should not be counted if it is not at the end."
);

console.log(
  countAdverbs("Iya ralyn to the store."),
  0,
  "-ly should not be counted if it is not at the end."
);

console.log(countAdverbs("He ran quickly and spoke softly."));
