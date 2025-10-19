// console.log(typeof (0.3).toFixed(3));

/*
Fractions and Rounding
Given a fraction frac (given in the format "1/2" for example) and n number of decimal places, return a sentence in the following format:

"{fraction} rounded to {n} decimal places is {answer}"

Examples

fracRound("1/3", 5) ➞ "1/3 rounded to 5 decimal places is 0.33333"

fracRound("2/8", 4) ➞ "2/8 rounded to 4 decimal places is 0.2500"

fracRound("22/7", 2) ➞ "22/7 rounded to 2 decimal places is 3.14"
*/

function fracRound(frac, n) {
  let [first, second] = frac.split("/");

  return `${frac} rounded to ${n} decimal places is ${(first / second).toFixed(
    n
  )}`;
}

console.log(
  fracRound("1/3", 5) === "1/3 rounded to 5 decimal places is 0.33333"
);
console.log(
  fracRound("2/8", 4) === "2/8 rounded to 4 decimal places is 0.2500"
);
console.log(
  fracRound("22/7", 2) === "22/7 rounded to 2 decimal places is 3.14"
);
console.log(
  fracRound("23/2", 2) === "23/2 rounded to 2 decimal places is 11.50"
);
console.log(
  fracRound("40/77", 3) === "40/77 rounded to 3 decimal places is 0.519"
);
console.log(
  fracRound("15/58", 3) === "15/58 rounded to 3 decimal places is 0.259"
);
console.log(
  fracRound("2/92", 2) === "2/92 rounded to 2 decimal places is 0.02"
);
console.log(
  fracRound("21/65", 6) === "21/65 rounded to 6 decimal places is 0.323077"
);
console.log(
  fracRound("29/40", 3) === "29/40 rounded to 3 decimal places is 0.725"
);
console.log(
  fracRound("49/38", 6) === "49/38 rounded to 6 decimal places is 1.289474"
);
console.log(
  fracRound("20/69", 3) === "20/69 rounded to 3 decimal places is 0.290"
);
console.log(
  fracRound("17/46", 6) === "17/46 rounded to 6 decimal places is 0.369565"
);
console.log(
  fracRound("46/28", 4) === "46/28 rounded to 4 decimal places is 1.6429"
);
console.log(
  fracRound("12/89", 3) === "12/89 rounded to 3 decimal places is 0.135"
);
console.log(
  fracRound("9/76", 7) === "9/76 rounded to 7 decimal places is 0.1184211"
);
console.log(
  fracRound("20/64", 4) === "20/64 rounded to 4 decimal places is 0.3125"
);
console.log(
  fracRound("28/77", 7) === "28/77 rounded to 7 decimal places is 0.3636364"
);
console.log(
  fracRound("17/52", 4) === "17/52 rounded to 4 decimal places is 0.3269"
);
console.log(
  fracRound("21/98", 6) === "21/98 rounded to 6 decimal places is 0.214286"
);
console.log(
  fracRound("49/61", 4) === "49/61 rounded to 4 decimal places is 0.8033"
);
console.log(
  fracRound("28/62", 3) === "28/62 rounded to 3 decimal places is 0.452"
);
console.log(
  fracRound("17/36", 3) === "17/36 rounded to 3 decimal places is 0.472"
);
console.log(
  fracRound("8/41", 2) === "8/41 rounded to 2 decimal places is 0.20"
);
console.log(
  fracRound("50/37", 7) === "50/37 rounded to 7 decimal places is 1.3513514"
);
console.log(
  fracRound("21/41", 3) === "21/41 rounded to 3 decimal places is 0.512"
);
console.log(
  fracRound("28/47", 6) === "28/47 rounded to 6 decimal places is 0.595745"
);
console.log(
  fracRound("1/48", 7) === "1/48 rounded to 7 decimal places is 0.0208333"
);
console.log(
  fracRound("12/58", 6) === "12/58 rounded to 6 decimal places is 0.206897"
);
console.log(
  fracRound("28/99", 5) === "28/99 rounded to 5 decimal places is 0.28283"
);
console.log(
  fracRound("24/72", 4) === "24/72 rounded to 4 decimal places is 0.3333"
);
console.log(
  fracRound("45/90", 3) === "45/90 rounded to 3 decimal places is 0.500"
);
console.log(
  fracRound("46/85", 5) === "46/85 rounded to 5 decimal places is 0.54118"
);
console.log(
  fracRound("45/86", 6) === "45/86 rounded to 6 decimal places is 0.523256"
);
console.log(
  fracRound("42/42", 7) === "42/42 rounded to 7 decimal places is 1.0000000"
);
