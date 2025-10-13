/*

camelCase ⇄ snake_case
Create two functions toCamelCase() and toSnakeCase()
that each take a single string and 
convert it into either camelCase or snake_case. 
If you're not sure what these terms mean, check the Resources tab above.

Examples

toCamelCase("hello_edabit") ➞ "helloEdabit"

toSnakeCase("helloEdabit") ➞ "hello_edabit"

toCamelCase("is_modal_open") ➞ "isModalOpen"

toSnakeCase("getColor") ➞ "get_color"

 */

const toCamelCase = (sent) => sent.replace(/_\w/gi, (el) => el[1].toUpperCase());

const toSnakeCase = (sent) => sent.replace(/[a-z][A-Z]/g, (el) => `${el[0]}_${el[1].toLowerCase()}`);

// camelCase to snake_case tests

console.log(toSnakeCase("edabit"), "edabit");

console.log(toSnakeCase("helloEdabit"), "hello_edabit");

console.log(toSnakeCase("isModalOpen"), "is_modal_open");

console.log(toSnakeCase("getBackgroundColor"), "get_background_color");

console.log(toSnakeCase("isLoading"), "is_loading");

console.log(toSnakeCase("x"), "x");

// snake_case to camelCase tests

console.log(toCamelCase("edabit"), "edabit");

console.log(toCamelCase("hello_edabit"), "helloEdabit");

console.log(toCamelCase("is_modal_open"), "isModalOpen");

console.log(toCamelCase("get_background_color"), "getBackgroundColor");

console.log(toCamelCase("is_loading"), "isLoading");

console.log(toCamelCase("x"), "x");
