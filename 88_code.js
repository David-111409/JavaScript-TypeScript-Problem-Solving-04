function vowelLinks(str) {
    let re = /[aeiou]\s+[aeiou]/i;
    return re.test(str);
}

console.log(vowelLinks("an open fire"), false);
console.log(vowelLinks("the sudden applause"), false);
console.log(vowelLinks("the large appliances"), true);
console.log(vowelLinks("creative environment"), true);
console.log(vowelLinks("Creative Environment"), true);
console.log(vowelLinks("beneficial luggage"), false);
console.log(vowelLinks("the eagle swooped down low"), true);
console.log(vowelLinks("this is not a drill"), false);
console.log(vowelLinks("Patrice Evra"), true);
console.log(vowelLinks("please log on to edabit"), true);
console.log(vowelLinks("the quick brown fox was sad"), false);
