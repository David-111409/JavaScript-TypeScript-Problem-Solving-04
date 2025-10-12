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
