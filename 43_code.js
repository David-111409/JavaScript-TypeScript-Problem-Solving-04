let x = { a: undefined, b: null };
console.log(JSON.stringify(x)); // { "b" : null}

let y = {c:NaN};
console.log(JSON.stringify(y)); // {"c":null}
