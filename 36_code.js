function afterNMonths(year, month) {
  if (!year) {
    return "year misssing";
  } else if (!month) {
    return "month misssing";
  }

  return year + Math.floor(month / 12);
}

console.log(afterNMonths(2020, 24), 2022);
console.log(afterNMonths(1832, 2), 1832);
console.log(afterNMonths(1444, 60), 1449);
console.log(afterNMonths(2020, undefined), "month missing");
console.log(afterNMonths(undefined, 2), "year missing");
console.log(afterNMonths(1444, 65), 1449);

/**
 outlierNumber([2, 3, 4]) ➞ 3
// 2 and 4 are even numbers.
// 3 is an outlier number.

outlierNumber([1, 2, 3]) ➞ 2

outlierNumber([4, 1, 3, 5, 9]) ➞ 4
 */

function outlierNumber(arr) {
  let l = arr.length;

  for (let i = 0; i < l; i++) {
    let prev = Math.abs(arr[(i - 1 + l) % l]) % 2;
    
    let curr = Math.abs(arr[i]) % 2;
    
    let next = Math.abs(arr[(i + 1) % l]) % 2;

    if (curr !== next && curr !== prev) {
      return arr[i];
    }
  }
}

console.log(outlierNumber([2, 3, 4]), 3);
console.log(outlierNumber([1, 2, 3]), 2);
console.log(outlierNumber([4, 1, 3, 5, 9]), 4);
console.log(outlierNumber([2, 6, 8, 10, 3]), 3);
console.log(outlierNumber([2, 6, 8, 200, 700, 1, 84, 10, 4]), 1);
console.log(outlierNumber([17, 6, 8, 10, 6, 12, 24, 36]), 17);
console.log(outlierNumber([1, 1, 1, 1, 1, 44, 7, 7, 7, 7, 7, 7, 7, 7]), 44);
console.log(
  outlierNumber([
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 35, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    7, 7, 7, 7, 1000,
  ]),
  1000
);
console.log(outlierNumber([1, 0, 0]), 1);
console.log(outlierNumber([3, 7, -99, 81, 90211, 0, 7]), 0);
console.log(outlierNumber([2, -6, 8, -10, -3]), -3);
console.log(
  outlierNumber([2, 6, 8, 2, -66, 34, -35, 66, 700, 1002, -84, 10, 4]),
  -35
);
console.log(outlierNumber([-20, 1, 7, 17, 19, 211, 7]), -20);
console.log(outlierNumber([1, 1, -1, 1, 1, -44, 7, 7, 7, 7, 7, 7, 7, 7]), -44);
