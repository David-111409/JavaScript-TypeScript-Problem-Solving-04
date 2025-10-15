console.log(null || false || "hello"); // "hello"
console.log(null && false && "hello"); // null
console.log(false && null && "hello"); // false
console.log(null || true || "hello"); // true
