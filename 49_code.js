/*
Examples

rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]) ➞ 3

rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]) ➞ 2.5

rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"]) ➞ 2
*/

function rogerShots(shots) {
  let score = 0;

  shots.forEach((shot) => {
    if (shot === "Bang!" || shot === "BangBang!") {
      score += 1;
    }
  });

  return score / 2;
}

console.log(
  rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]),
  3
);
console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]), 2.5);
console.log(
  rogerShots([
    "Bang!",
    "BangBangBang!",
    "Boom!",
    "Bang!",
    "BangBang!",
    "BangBang!",
  ]),
  2
);
console.log(rogerShots(["BangBang!", "BangBang!", "BangBang!"]), 1.5);
console.log(
  rogerShots([
    "Bang!",
    "BadaBing!",
    "Badaboom!",
    "Bang!",
    "Bang!",
    "Bang!",
    "Bang!",
    "Bang!",
  ]),
  3
);
console.log(
  rogerShots([
    "BangBang!",
    "BangBang!",
    "Bag!",
    "Ban!",
    "Tang!",
    "Bang!",
    "Bang!",
  ]),
  2
);
