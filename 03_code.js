let serials = "S100S S3000S S50000S S950000S";

// let re = /\bs\d{3}s\b/ig;

// let re = /\bs\d{4,5}s\b/ig;
let re = /s\d{4,}s/gi;

console.log(serials.match(re));

let myString = "We Love Programming";

let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// let re = /\d=?\w/gi;

// let re = /\b\d\w{5}z\b/ig;

// let re = /\d\w{5}(?=z)/ig;

// let re = /\d\w{5}(?!z)/ig;

// let re = /\d\w{8}(?!z)/ig;

let re = /\d\w{8}(?=\s)/ig;

console.log(names.match(re));

// let re = /ing$/ig;

// console.log(re.test(myString));

// let re = /lz/ig;

// console.log(re.test(names));

// let re = /^we/gi;

// let re = /^2/g;

// console.log(re.test(myString));

// let re = /^1/ig;

// let re = /^\d/g;

// let re = /^\w/g;

// let re = /^\W/g;

// let re = /^\s/g;

// console.log(re.test(names));

/**
 Write a function that takes a string and 
 calculates the number of letters and digits within it.
Return the result as an object.

Examples

countAll("Hello World") ➞ { "LETTERS":  10, "DIGITS": 0 }

countAll("H3ll0 Wor1d") ➞ { "LETTERS":  7, "DIGITS": 3 }

countAll("149990") ➞ { "LETTERS": 0, "DIGITS": 6 }
 */

function countAll(str) {
  let DIGITS = str.match(/\d/g)?.length || 0;
  
  let LETTERS = str.match(/[a-z]/gi)?.length || 0;

  return { LETTERS, DIGITS };
}

console.log(countAll("Hello"), { LETTERS: 5, DIGITS: 0 });
console.log(countAll("137"), { LETTERS: 0, DIGITS: 3 });
console.log(countAll("H3LL0"), { LETTERS: 3, DIGITS: 2 });
console.log(countAll("149990"), { LETTERS: 0, DIGITS: 6 });
console.log(
  countAll("edabit 2018"),
  { LETTERS: 6, DIGITS: 4 },
  "Spaces are not letters."
);
console.log(countAll("    "), { LETTERS: 0, DIGITS: 0 });
