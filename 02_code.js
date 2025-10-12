/*
validateEmail("@gmail.com") ➞ false

validateEmail("hello.gmail@com") ➞ false

validateEmail("gmail") ➞ false

validateEmail("hello@gmail") ➞ false

validateEmail("hello@edabit.com") ➞ true
 */

const validateEmail = (email) => /^[a-z.]+@[a-z]+\.\w+$/i.test(email);

console.log(validateEmail("@edabit.com"), false);

console.log(validateEmail("@edabit"), false);

console.log(validateEmail("matt@edabit.com"), true);

console.log(validateEmail(""), false, "Don't forget about empty strings!");

console.log(validateEmail("hello.gmail@com"), false);

console.log(validateEmail("bill.gates@microsoft.com"), true);

console.log(validateEmail("hello@email"), false);

console.log(validateEmail("%^%$#%^%"), false);

console.log(validateEmail("www.email.com"), false);

console.log(validateEmail("email"), false);

console.log(validateEmail("hello@gmai.com") /* true */, validateEmail("hello@exa_mple.com") /* false */);

console.log(validateEmail("@gmail.com"));        // false
console.log(validateEmail("hello.gmail@com"));   // false
console.log(validateEmail("gmail"));             // false
console.log(validateEmail("hello@gmail"));       // false
console.log(validateEmail("hello@edabit.com"));  // true


/*
mathExpr("4 + 5") ➞ true

mathExpr("4*6") ➞ true

mathExpr("4*no") ➞ false
*/
function mathExpr(exp) {
  return /^\d+\s*[*/%+-]\s*\d+$/i.test(exp);
}

// console.log(mathExpr("234  * 3234"));
// console.log(mathExpr("5+4"), true);
// console.log(mathExpr("4 * 5"), true);
// console.log(mathExpr("3*6"), true);
// console.log(mathExpr("4 - 5"), true);
// console.log(mathExpr("6 % 7"), true);
// console.log(mathExpr("a - b"), false);
// console.log(mathExpr("a - 2"), false);
// console.log(mathExpr("nope"), false);

console.log(/^\d+\s?[*/%+-]\s?\d+$/.test("4+5"));      // true
console.log(/^\d+\s?[*/%+-]\s?\d+$/.test("12 * 3"));   // true
console.log(/^\d+\s?[*/%+-]\s?\d+$/.test("7 -9"));     // true
console.log(/^\d+\s?[*/%+-]\s?\d+$/.test("4 * no"));   // false
console.log(/^\d+\s?[*/%+-]\s?\d+$/.test("8//2"));     // false
