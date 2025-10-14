let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";
let url6 = "elzero.organization";
let re = /^(https?:\/\/(www\.)?)?[a-z0-9-]+\.org\b.*$/gi;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
console.log(url6.match(re));

/*
Extend the Vowels
Create a function that takes a word and extends all vowels by a number num.

Examples

extendVowels("Hello", 5) ➞ "Heeeeeelloooooo"

extendVowels("Edabit", 3) ➞ "EEEEdaaaabiiiit"

extendVowels("Extend", 0) ➞ "Extend"
Notes

Return "invalid" if num is not a positive integer or 0.
*/

const extendVowels = (str, n) => {
    if (n < 0 || !Number.isInteger(n)) {
        return "invalid";
    } else if (n === 0) {
        return str;
    } else {
        // n++;
        return str.replace(/[aeiou]/gi, (el) => `${el.repeat(n + 1)}`);
    }
};

console.log(extendVowels("hello", 3));

console.log(extendVowels("Hello", 5) === "Heeeeeelloooooo");

console.log(extendVowels("Edabit", 3) === "EEEEdaaaabiiiit");

console.log(extendVowels("Extend", 0) === "Extend");

console.log(extendVowels("A", 10) === "AAAAAAAAAAA");

console.log(extendVowels("Z", 93) === "Z");

console.log(extendVowels("Vowel", 0.5) === "invalid");

console.log(extendVowels("Nice", -8) === "invalid");
