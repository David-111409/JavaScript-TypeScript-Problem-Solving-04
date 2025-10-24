/*
 Making Change
Create a function that takes an amount of monetary change 
(e.g. 47 cents) and breaks down the most efficient way 
that change can be made using USD quarters, dimes, nickels and pennies.
 Your function should return an object.

Coin	Value
Penny	0.01
Nickel	0.05
Dime	0.10
Quarter	0.25
Examples

makeChange(47) ➞ { "q": 1, "d": 2, "n": 0, "p": 2 }

makeChange(24) ➞ { "q": 0, "d": 2, "n": 0, "p": 4 }

makeChange(92) ➞ { "q": 3, "d": 1, "n": 1, "p": 2 }
Notes

Amount given will always be less than 100 and more than 0.
 */

const coins = {
  q: 25,
  d: 10,
  n: 5,
  p: 1,
};
function makeChange(amount) {
  const result = {};

  for (let coin in coins) {
    result[coin] = Math.floor(amount / coins[coin]); // Math.floor() rounds down to the nearest whole number
    amount -= result[coin] * coins[coin]; // amount is updated by subtracting the total value of the coins used
  }

  return result;
}

console.log(makeChange(47), { q: 1, d: 2, n: 0, p: 2 });
console.log(makeChange(24), { q: 0, d: 2, n: 0, p: 4 });

console.log(makeChange(92), { q: 3, d: 1, n: 1, p: 2 });

console.log(makeChange(99), { q: 3, d: 2, n: 0, p: 4 });
console.log(makeChange(87), { q: 3, d: 1, n: 0, p: 2 });

console.log(
  JSON.stringify(makeChange(15)) === JSON.stringify({ q: 0, d: 1, n: 1, p: 0 })
);

console.log(makeChange(25), { q: 1, d: 0, n: 0, p: 0 });
console.log(makeChange(36), { q: 1, d: 1, n: 0, p: 1 });

/*
Reverse Coding Challenge #6
This is a reverse coding challenge. 
Normally you're given explicit directions with how to create a function.
Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.

Examples

mysteryFunc(152) ➞ 10

mysteryFunc(832) ➞ 48

mysteryFunc(19) ➞ 9

mysteryFunc(133) ➞ 9
*/

function mysteryFunc(num) {
  //   let arr = num.toString().split("");
  //   return arr.reduce((acc, cur) => acc * cur, 1);
  let prod = 1;
  while (num) {
    let last = num % 10;
    prod *= last;
    num = Math.floor(num / 10);
  }
  return prod;
}

console.log(mysteryFunc(152), 10);
console.log(mysteryFunc(832), 48);

console.log(mysteryFunc(5511), 25);
console.log(mysteryFunc(19), 9);

console.log(mysteryFunc(133), 9);
