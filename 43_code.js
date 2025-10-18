let x = { a: undefined, b: null };
console.log(JSON.stringify(x)); // { "b" : null}

let y = {c:NaN};
console.log(JSON.stringify(y)); // {"c":null}

let x = "5";
let y = true;

console.log(x + y); // "5true"
console.log(typeof (x + y)); // "string" 
console.log(x * y); // 5

console.log(typeof (x * y)); // "number"
console.log(x - y); // 4
console.log(typeof (x - y)); // "number"

console.log(+true); // 1
console.log(+"123"); // 123 of number type
console.log(+false); // 0

console.log(+"hello"); // NaN
console.log(+null); // 0
