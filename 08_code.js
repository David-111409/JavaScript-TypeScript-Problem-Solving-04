/*
When creating variables, 

the variable name must always start with a letter and cannot contain spaces,

though numbers and underscores are allowed to be contained in it also.

Create a function which returns true if a given variable name is valid, otherwise return false.

Examples

variableValid("result") ➞ true

variableValid("odd_nums") ➞ true

variableValid("2TimesN") ➞ false
*/

const variableValid = (name) => {
  
  let res = /*!/\s/g.test(name) && */ /^[a-z_]\w*$/i.test(name);
  
  return res;
  
};

console.log(variableValid("result"), true);

console.log(variableValid("odd_nums"), true);

console.log(variableValid("2TimesN"), false);

console.log(variableValid("rather_long_variable_name"), true);

console.log(variableValid("count spaces"), false);

console.log(variableValid("nTimes2"), true);

console.log(variableValid("_2"));

console.log(variableValid("2_2"));

// let _ = 2;

// console.log(_);

console.log(variableValid("result")); // true

console.log(variableValid("odd_nums")); // true

console.log(variableValid("2TimesN")); // false

console.log(variableValid("with space")); // false

console.log(variableValid("_hidden")); // true
