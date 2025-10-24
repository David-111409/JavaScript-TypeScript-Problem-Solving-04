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

/*
Create a function that takes a number as an argument and returns n instances of the Fibonacci sequence as an array.

Fibonacci numbers: F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1. So the easy explanation is: The next element is the sum of the two previous elements.

If you want to read more about this sequence, take a look at the On-Line Encyclopedia of Integer Sequences. Fibonacci numbers are strongly related to the golden ratio. See the OEIS and Wikipedia links in the resources tab.

Examples

fibSeq(4) ➞ [0, 1, 1, 2]

fibSeq(7) ➞ [0, 1, 1, 2, 3, 5, 8]

fibSeq(0) ➞ []
Notes

If 0 is given, return an empty array.
If no argument is given, return undefined.
The input will never be a negative integer.
*/

function fibSeq(n) {
  let arr = [0, 1];
  if (n === undefined) {
    return undefined;
  }
  else if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return arr;
  } else {
    for (let i = 2; i < n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
  }
}

console.log(fibSeq(2), [0, 1]);
console.log(fibSeq(4), [0, 1, 1, 2]);
console.log(fibSeq(0), []);
console.log(fibSeq(7), [0, 1, 1, 2, 3, 5, 8]);
console.log(fibSeq(), undefined, "An empty input has to return undefined");
console.log(
  fibSeq(20),
  [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
    2584, 4181,
  ]
);
console.log(fibSeq(1), [0]);
