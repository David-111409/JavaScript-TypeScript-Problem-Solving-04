/*
totalSales([
  ["A", "B", "C"],
  [ 2 ,  7 ,  1 ],
  [ 3 ,  6 ,  6 ],
  [ 4 ,  5 ,  5 ]
], "A") ➞ 9

// 2 + 3 + 4 = 9


totalSales([
  ["A", "B", "C"],
  [ 2 ,  7 ,  1 ],
  [ 3 ,  6 ,  6 ],
  [ 4 ,  5 ,  5 ]
], "C") ➞ 12

// 1 + 6 + 5 = 12


totalSales([
  ["A", "B", "C"],
  [ 2 ,  7 ,  1 ],
  [ 3 ,  6 ,  6 ],
  [ 4 ,  5 ,  5 ]
], "D") ➞ "Product not found"
*/
function totalSales(ar, prod) {
  let col = ar[0].findIndex((x) => x === prod);
  if (col === -1) {
    return "Product not found";
  }
  return ar.slice(1).reduce((acc, cur) => acc + cur[col], 0);
}
console.log(
  totalSales(
    [
      ["A", "B", "C"],
      [2, 7, 1],
      [3, 6, 6],
      [4, 5, 5],
    ],
    "A"
  )
);

table1 = [
  ["A", "B", "C"],
  [2, 7, 1],
  [3, 6, 6],
  [4, 5, 5],
];

table2 = [
  ["W", "X", "Y", "Z"],
  [3, 5, 7, 1],
  [4, 5, 2, 3],
];

table3 = [
  ["R", "T", "V", "W", "C"],
  [2, 3, 7, 7, 4],
  [8, 5, 2, 9, 0],
  [2, 5, 8, 7, 4],
  [5, 3, 7, 2, 3],
];

console.log(totalSales(table1, "A"), 9);
console.log(totalSales(table1, "B"), 18);
console.log(totalSales(table1, "C"), 12);
console.log(totalSales(table1, "D"), "Product not found");

console.log(totalSales(table2, "A"), "Product not found");
console.log(totalSales(table2, "W"), 7);
console.log(totalSales(table2, "Y"), 9);
console.log(totalSales(table2, "Z"), 4);

console.log(totalSales(table3, "A"), "Product not found");
console.log(totalSales(table3, "T"), 16);
console.log(totalSales(table3, "Y"), "Product not found");
console.log(totalSales(table3, "W"), 25);
