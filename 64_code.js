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

/*
import { useState } from "react";
import "./App.css";
// /*reverseVowels("hello") → "holle"
// reverseVowels("javascript") → "jivascrapt"
// reverseVowels("AEIOU") → "UOIEA"
//  */

// function reverseVowels(str) {
//   let vowels = new Set("aeiouAEIOU");
//   let arr = str.split("");
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     if (!vowels.has(arr[left])) {
//       left++;
//     } else if (!vowels.has(arr[right])) {
//       right--;
//     } else {
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//       left++;
//       right--;
//     }
//   }
//   return arr.join("");
// }
// // The time of the function is O(n) and the space complexity is O(n)
// console.log(reverseVowels("hello"));
/*
function App() {
  const [items, setItems] = useState([
    { id: 1, name: "item1", count: 1 },
    { id: 2, name: "item2", count: 2 },
    { id: 3, name: "item3", count: 3 },
  ]);
  
  function Component({ items }) {
    return <ul>{items}</ul>;
  }

  return (
    <Component
      items={items.map(
        (item) => item.count > 1 && <li className="item" key={item.id}>{item.name}</li>
      )}
    />
  );
}

export default App;
*/
