const obj = { two: 2 };

var { one = 1, two } = obj;

console.log(one, two); // outputs 1 2

console.log(one, 1, "The variable one must equal 1");
console.log(two, 2, "The variable two must equal 2");

/*
Write a function that returns true if an object is empty, and false otherwise.

Examples

isEmpty({}) ➞ true

isEmpty({ a: 1 }) ➞ false
*/

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmpty({}), true);
console.log(isEmpty({ a: 1 }), false);
console.log(isEmpty({ z: 2, w: 4, y: 5 }), false);

/*
You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. 
You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), 
and the starting inventory. Return the total profit made, rounded to the nearest dollar.

Examples

profit({
  costPrice: 32.67,
  sellPrice: 45.00,
  inventory: 1200
}) ➞ 14796

profit({
  costPrice: 225.89,
  sellPrice: 550.00,
  inventory: 100
}) ➞ 32411

profit({
  costPrice: 2.77,
  sellPrice: 7.95,
  inventory: 8500
}) ➞ 44030
*/

function profit({ costPrice, sellPrice, inventory }) {
  return Math.round((sellPrice - costPrice) * inventory);
}

console.log(
  profit({ costPrice: 32.67, sellPrice: 45.0, inventory: 1200 }) === 14796
);
console.log(
  profit({ costPrice: 0.1, sellPrice: 0.18, inventory: 259800 }) === 20784
);
console.log(
  profit({ costPrice: 185.0, sellPrice: 299.99, inventory: 300 }) === 34497
);
console.log(
  profit({ costPrice: 378.11, sellPrice: 990.0, inventory: 99 }) === 60577
);
console.log(
  profit({ costPrice: 4.67, sellPrice: 5.0, inventory: 78000 }) === 25740
);
console.log(
  profit({ costPrice: 19.87, sellPrice: 110.0, inventory: 350 }) === 31546
);
console.log(
  profit({ costPrice: 2.91, sellPrice: 4.5, inventory: 6000 }) === 9540
);
console.log(
  profit({ costPrice: 68.01, sellPrice: 149.99, inventory: 500 }) === 40990
);
console.log(
  profit({ costPrice: 1.45, sellPrice: 8.5, inventory: 10000 }) === 70500
);
console.log(
  profit({ costPrice: 10780, sellPrice: 34999, inventory: 10 }) === 242190
);

// const obj = { one: 1, two: 2 };
// const { one, two } = obj;
// let one = obj.one
// let two = obj.two

// console.log(one, two);

// const user = {
//   name: "Dawoud",
//   address: {
//     city: "Riyadh",
//     country: "Saudi Arabia",
//   },
// };
// const {
//   address: { city, country },
// } = user;
// console.log("city:", city, "// country:", country);

// const users = [
//   { name: "Ali", age: 25, country: "KSA" },
//   { name: "Omar", age: 30, country: "Egypt" },
//   { name: "Sara", age: 28, country: "UAE" },
// ];

// const [{ name }, { country }, { age }] = users;
// console.log("Name:", name, "/ Country:", country, "/ Age:", age);

// const user = {
//   name: "Sara",
//   info: {
//     age: 25,
//     address: {
//       city: "Cairo",
//     },
//   },
// };
// const {
//   name,
//   info: {
//     age,
//     address: { country = "Egypt", city },
//   },
// } = user;
// console.log(name, age, city, country);

// const data = {
//   users: [
//     { name: "Ali", age: 25 },
//     { name: "Sara", age: 30 },
//   ],
//   location: "Cairo",
// };

// const {
//   users: [{ name }, { age }],
//   location,
// } = data;

// console.log(name, age, location);

// const product = {
//   id: 101,
//   details: {
//     name: "Laptop",
//     price: 1500,
//     specs: {
//       ram: "16GB",
//       storage: "512GB SSD",
//     },
//   },
// };
// const {
//   details: {
//     name: productName,
//     brand = "No brand",
//     specs: { ram },
//   },
// } = product;

// console.log(productName, ram, brand);

const store = {
  name: "TechWorld",
  products: [
    { id: 1, title: "Laptop", price: 1500 },
    { id: 2, title: "Phone", price: 800 },
  ],
  location: {
    country: "Japan",
    city: "Tokyo",
  },
};
const {
  name,
  products: [, { title }],
  location: { city },
} = store;

console.log(`Store: ${name}, Product: ${title}, City: ${city}.`);

{
  const student = {
    name: "Ali",
    scores: {
      math: 90,
      english: 85,
    },
  };

  const {
    name: [firstLetter, secondLetter, thirdLetter],
    scores: { math, science = 70 },
  } = student;
  console.log(firstLetter, secondLetter, thirdLetter, math, science); // A l i 90 70
}
