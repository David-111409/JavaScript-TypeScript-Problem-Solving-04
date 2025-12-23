// function createCounter() {
//     let count = 0;

//     return function () {
//         count++;
//         return count;
//     };
// }

// const counter1 = createCounter();
// const counter2 = createCounter();

// console.log(counter1()); // 1
// console.log(counter1()); // 2
// console.log(counter2()); // 1
// console.log(counter1()); // 3
// for (var i = 0; i < 3; i++) { // 3 3 3
//     setTimeout(() => {
//         console.log("var:", i);
//     }, 0);
// }

// for (let j = 0; j < 3; j++) { // 0 1 2
//     setTimeout(() => {
//         console.log("let:", j);
//     }, 0);
// }

// console.log(0 == "0"); // true
// console.log(0 === "0"); // false

// console.log(false == 0); // true
// console.log(false === 0); // false

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// setTimeout(() => {
//     console.log("var:", myVar);
// }, 0);

// let myVar = 100;
// myVar += 100;

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("C");
// });

// console.log("D");

// console.log(1); // 163524

// setTimeout(() => {
//   console.log(2);
// }, 0);

// Promise.resolve().then(() => {
//   console.log(3);
//   setTimeout(() => {
//     console.log(4);
//   }, 0);
// });

// Promise.resolve().then(() => {
//   console.log(5);
// });

// console.log(6);

// {
//     console.log("start"); // start >> end >> promise2 >> timeout1 >> promise1 >> timeout2

//     setTimeout(() => {
//         console.log("timeout1");

//         Promise.resolve().then(() => {
//             console.log("promise1");
//         });
//     }, 0);

//     Promise.resolve().then(() => {
//         console.log("promise2");

//         setTimeout(() => {
//             console.log("timeout2");
//         }, 0);
//     });

//     console.log("end");
// }

// console.log(10 > "9"); // true
// console.log("10" > 9);
// console.log("10" > "9");

// const str = "BFE👍";
// console.log(str.length); // 5
// console.log(str.slice(3, 4) == '👍') // false
// console.log([...str].length) // 4
// console.log([...str].slice(3, 4) == '👍') // true

function log(a, b, c, d) {
    console.log(a, b, c, d);
    console.log(arguments);
    arguments[0] = "bfe";
    arguments[3] = "dev";

    console.log(a, b, c, d); // bfe 2 3 dev
    console.log(arguments);
}

log(1, 2, 3);
