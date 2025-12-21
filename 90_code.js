// let ar = [1, 2, [3, 4]];


// // let deepCopy = JSON.parse(JSON.stringify(ar));
// // deepCopy.push(5);
// let shallowCopy = ar.slice();
// shallowCopy[2].push(5);
// console.log(shallowCopy, ar);

// let ar = [1, 2, 3];
// ar.foo = "hello";
// console.log(ar);
// for (let ele in ar) {
//     console.log(ele, ":", ar[ele]);
// }

// for (let el of ar) {
//     console.log(el);
// }

// for (let i in ar){
//     console.log(i);
// }

// const arr = ["a", "b", "c"];
// arr.extra = "hello";

// for (const i in arr) {
//   console.log(i); // 0 1 2 extra
// }

// for (const v of arr) {
//   console.log(v); // a b c
// }

// const str = "JS";

// for (const i in str) console.log(i); // 0 1
// for (const c of str) console.log(c); // J S

// Array.prototype.foo = "bar";

// const arr = [10, 20];

// for (const i in arr) console.log(i); // 0 1 foo
// for (const v of arr) console.log(v); // 10 20
// console.log(Array.prototype);

// const original = [
//     { name: "A", scores: [10, 20] },
//     { name: "B", scores: [30, 40] },
// ];

// const shallowCopy = original.slice();
// const deepCopy = structuredClone(original);

// shallowCopy[0].name = "X";
// shallowCopy[0].scores.push(99);

// deepCopy[1].name = "Y";
// deepCopy[1].scores.push(88);

// console.log(original);
// // [{ name: "X", scores: [10, 20, 99] }];
// console.log(shallowCopy);
// console.log(deepCopy);
