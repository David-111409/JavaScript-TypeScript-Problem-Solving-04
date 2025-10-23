const obj = { two: 2 };

var { one = 1, two } = obj;

console.log(one, two); // outputs 1 2

console.log(one, 1, "The variable one must equal 1");
console.log(two, 2, "The variable two must equal 2");
