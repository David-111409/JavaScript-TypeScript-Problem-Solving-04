/*
Alphanumeric Restriction
Create a function that returns true if the given string has any of the following:

Only letters and no numbers.
Only numbers and no letters.
If a string has both numbers and letters, or contains characters which don't fit into any category, return false

Examples

alphanumericRestriction("Bold") ➞ true

alphanumericRestriction("123454321") ➞ true

alphanumericRestriction("H3LL0") ➞ false

alphanumericRestriction("ed@bit") ➞ false
*/
const alphanumericRestriction = (str) => {
    // let first = /^[a-z]+$/i.test(str);
    // let second = /^[0-9]+$/.test(str);

    // return first || second;
    if (!str) {
        return false;
    }
    let isDigit = 0;
    let isLetter = 0;

    for (let l of str) {
        if (/[a-z]/i.test(l)) {
            isLetter++;
        } else if (/[0-9]/.test(l)) {
            isDigit++;
        }
        else {
            return false;
        }
        if (isDigit && isLetter) return false;
    }

    return true;
};

console.log(alphanumericRestriction("133434"));

console.log(alphanumericRestriction("Bold"), true);
console.log(alphanumericRestriction("123454321"), true);
console.log(alphanumericRestriction("H3LL0"), false);
console.log(alphanumericRestriction("hhefuhiwfgn"), true);
console.log(alphanumericRestriction("0"), true);
console.log(alphanumericRestriction("hhefuhiwfgn"), true);
console.log(alphanumericRestriction("ed@bit"), false);
console.log(alphanumericRestriction("only letters right"), false);
console.log(alphanumericRestriction("132 143 234"), false);
console.log(alphanumericRestriction("()"), false);
console.log(alphanumericRestriction("Hello"), true);
console.log(alphanumericRestriction("10,000"), false);
console.log(alphanumericRestriction("1a2b3c"), false);
console.log(alphanumericRestriction(""), false);

console.log(alphanumericRestriction("Bold")); // true
console.log(alphanumericRestriction("123454321")); // true
console.log(alphanumericRestriction("H3LL0")); // false
console.log(alphanumericRestriction("ed@bit")); // false
console.log(alphanumericRestriction("Hello World")); // false
console.log(alphanumericRestriction("")); // false
