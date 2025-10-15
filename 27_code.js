{
  const obj = { a: 1 };
  obj.a = 2;
  console.log(obj); // {a: 2}
}

console.log(true + 1); // 2
console.log(true + "1"); // "true1"
console.log(Boolean({})); // true

console.log(Boolean([])); // true
console.log(Boolean('')); // false
console.log(Boolean(0)); // false

console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

console.log(Boolean('Hello')); // true
console.log(Boolean(42)); // true
console.log(Boolean(-42)); // true

console.log(Boolean(3.14)); // true
console.log(Boolean(true)); // true
console.log(Boolean(false)); // false

console.log(Boolean(function() {})); // true
console.log(Boolean(new Date())); // true
console.log(Boolean(/regex/)); // true

console.log(Boolean(Symbol('sym'))); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity)); // true

console.log(Boolean({ key: 'value' })); // true
console.log(Boolean([1, 2, 3])); // true
console.log(Boolean(' ')); // true

console.log(Boolean('\n')); // true
console.log(Boolean(new Boolean(false))); // true
console.log([] == 0); // true

console.log([0] == [0]); // false
console.log(1 + 2 + "3"); // "33"
console.log("1" + 2 + 3); // "123"

console.log(5 && 1); // 1
console.log(0 && 1); // 0
console.log(5 || 1); // 5
console.log(0 || 1); // 1

console.log((5 && 1) || (0 && 1)); //1 || 0 => 1
console.log((5 || 1) && (0 || 1)); //5 && 1 => 1
console.log((5 && 1) && (0 && 1)); //1 && 0 => 0

console.log((5 || 1) || (0 || 1)); //5 || 1 => 5
console.log(5 && 1 || 0 && 1); //1 || 0 => 1
console.log(5 || 1 && 0 || 1); //5

console.log(5 && (1 || 0) && 1); //5 && 1 && 1 => 1
console.log(5 || (1 && 0) || 1); //5 || 0 || 1 => 5
console.log((5 && 1) || (0 || 1)); //1 || 1 => 1

console.log((5 || 1) && (0 && 1)); //5 && 0 => 0
console.log(5 && (1 || 0) || 1); //1
console.log(5 || (1 && 0) && 1); //5

console.log(5 && 1 && 0 || 1); //0 || 1 => 1
console.log(5 || 1 || 0 && 1); //5 || 0 => 5
console.log(5 && (1 && 0) && 1); //5 && 0 && 1 => 0
console.log(5 || (1 || 0) || 1); //5 || 1 => 5
