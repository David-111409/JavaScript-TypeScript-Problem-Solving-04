console.log(typeof Number.isNaN); // "function"
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(5)); // false
console.log(Number.isNaN("NaN")); // false
console.log(Number.isNaN(undefined)); // false

let ar = [1, 2];
for (var i = 0; i < ar.length; i++) {
  // output : 2 2
  setTimeout(
    function () {
      console.log(i);
    },
    [100]
  );
}

for (let i = 0; i < ar.length; i++) {
  // output : 0 1
  setTimeout(
    function () {
      console.log(i);
    },
    [100]
  );
}

let x = "10";
x++;
console.log(x); // 11

const y = "20";
console.log(y++); // error
