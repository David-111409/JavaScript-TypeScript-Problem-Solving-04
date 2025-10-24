/*
Which Number Is Not like the Others?
Create a function that takes an array of numbers and returns the number that's unique.

Examples

unique([3, 3, 3, 7, 3, 3]) ➞ 7

unique([0, 0, 0.77, 0, 0]) ➞ 0.77

unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0
*/

function unique(ar) {
  let l = ar.length;

  for (let i = 0; i < l; i++) {
    let cur = ar[i];

    if (ar[(i + 1) % l] !== cur && ar[(i - 1 + l) % l] !== cur) {
      return cur;
    }
  }
}

console.log(unique([3, 3, 3, 7, 3, 3]), 7);
console.log(unique([0, 0, 0.77, 0, 0]), 0.77);
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1]), 0);
console.log(unique([-4, -4, -4, 4]), 4);
console.log(unique([8, 8, 8, 8, 8, 8, 8, 0.5]), 0.5);
console.log(unique([2, 1, 2, 2, 2, 2, 2, 2]), 1);
