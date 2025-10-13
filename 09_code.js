/**
isValidHexCode("#CD5C5C") ➞ true

isValidHexCode("#EAECEE") ➞ true

isValidHexCode("#eaecee") ➞ true

isValidHexCode("#CD5C58C") ➞ false
// Length exceeds 6

isValidHexCode("#CD5C5Z") ➞ false
// Not all alphabetic characters in A-F

isValidHexCode("#CD5C&C") ➞ false
// Contains unacceptable character

isValidHexCode("CD5C5C") ➞ false
// Missing #
 */

const isValidHexCode = (hex) => /^#[A-F0-9]{6}$/i.test(hex);

console.log(isValidHexCode("#CD5C5C"), true);

console.log(isValidHexCode("#EAECEE"), true);

console.log(isValidHexCode("#eaecee"), true);

console.log(isValidHexCode("#CD5C58C"), false, "Length exceeds 6.");

console.log(
  isValidHexCode("#CD5C5Z"),
  false,
  "Alphabetic characters not in A-F."
);

console.log(isValidHexCode("#CD5C&C"), false, "Unacceptable character.");

console.log(isValidHexCode("CD5C5C"), false, "Does not start with #.");

console.log(isValidHexCode("#123CCCD"), false, "Length exceeds 6.");

console.log(isValidHexCode("#123456"), true);

console.log(isValidHexCode("#987654"), true);

console.log(isValidHexCode("#9876543"), false, "Length exceeds 6.");

console.log(isValidHexCode("#CCCCCC"), true);

console.log(
  isValidHexCode("#ZCCZCC"),
  false,
  "Not acceptable alphabetic characters."
);

console.log(
  isValidHexCode("#Z88Z99"),
  false,
  "Not acceptable alphabetic characters."
);

console.log(isValidHexCode("#Z88!99"), false, "Unacceptable character.");
