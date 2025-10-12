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
