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

let ar = [1, 2, 3, 4];
console.log(1 in ar); // true
console.log(2 in ar); // true
console.log(3 in ar); // true
console.log(4 in ar); // false
console.log(5 in ar); // false
console.log(0 in ar); // true

{
  let x = "8";
  let a = 1;
  let res = x + a + 1;
  console.log(res, typeof res); // "811"  string

  // What is the difference  between find and filter in js?
  // find returns the first element that satisfies the condition,
  // while filter returns all elements that satisfy the condition in an array.

  let arr = [1, 2, 3, 4, 5, 6];
  let findResult = arr.find((num) => num > 3); // 4
  let filterResult = arr.filter((num) => num > 3); // [4, 5, 6]

  console.log(findResult);
  console.log(filterResult);
}
