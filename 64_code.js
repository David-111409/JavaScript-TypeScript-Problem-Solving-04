// [1, 2, 2, 3, 3, 3] → [1, 2, 3]

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicates([1, 2, 2, 3, 3, 3]));
// console.log(removeDuplicates([1, 2, 3, 4, 5, 5, 5, 4,  3, 2, 1]));

/* [
  { title: "Phone", category: "tech" },
  { title: "Shirt", category: "fashion" }
]
  {
  tech: [{ title: "Phone", category: "tech" }],
  fashion: [{ title: "Shirt", category: "fashion" }]
}
*/
// function groupByCategory(arr) {
//   return arr.reduce((acc, item) => {
//     const { category } = item;
//     if (!acc[category]) {
//       acc[category] = [];
//     }
//     acc[category].push(item);
//     return acc;
//   }, {});
// }
// console.log(
//   groupByCategory([
//     { title: "Phone", category: "tech" },
//     { title: "Shirt", category: "fashion" },
//   ])
// );

// const products1 = [
//   { title: "Phone", category: "tech" },
//   { title: "Shirt", category: "fashion" },
//   { title: "Laptop", category: "tech" },
// ];

// console.log(groupByCategory(products1));
/*
"hi hi hello world world world"

*/
// const countWords = (str) => {
//   let words = str.trim().toLowerCase().split(/\s+/);
//   return words.reduce((acc, word) => {
//     acc[word] = (acc[word] || 0) + 1;
//     return acc;
//   }, {});
// };
// console.log(countWords("hi hi  Hi HI hello world world world"));

const longestWord = (str) =>
  str
    .replace(/[^a-z0-9\s]/gi, "")
    .split(/\s+/)
    .reduce((acc, word) => (acc.length > word.length ? acc : word), "");
console.log(longestWord("This is the world of mexicanettyte president"));
console.log(longestWord("I love JavaScript, Reactjsnewversion*****!! and coding."));
