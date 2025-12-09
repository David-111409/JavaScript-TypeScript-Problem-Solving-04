// if (NaN){
//     console.log("true");
// }else{
//     console.log("false");
// }

// const unique = new Set([1, 1, 2, 2, 3, 4, 5]);

// // console.log(unique.keys(), unique);
// for (let key of unique.keys()) {
//     console.log(key);
// }

// for (let [key, val] of unique.entries()) {
//     console.log(key, val);
// }

// for (let val of unique.values()) {
//     console.log(val);
// }

// "real talk bro"

// function countChars(str) {
//     return new Set(str).size;
// }

// console.log(countChars("real talk bro"));

function intersactionOfArray(ar1, ar2) {
    let set1 = new Set(ar1);
    let set2 = new Set(ar2);
    let intersection = [];
    for (let item of set1) {
        if (set2.has(item)) {
            intersection.push(item);
        }
    }
    return intersection;
}

console.log(intersactionOfArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 5, 2, 3]));

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

let result = Math.max(...n1) * [...n1, ...n2].length;
console.log(result);

let ar = [1, 2, 3, 4, 5];
// ar.shift();
console.log(ar.shift());
// console.log(ar);

// let modal = true;

// if (modal) {
//     console.log("modal");
// }

// console.log(modal.constructor.name);

// let n = 10;
// let f = new Number(10);
// console.log(n.constructor.name);
// console.log(f.constructor.name);
// console.log(n === f, n == f);
// console.log(n instanceof Number, f instanceof Number);

/*
  Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
// console.log(Math.trunc(Math.min(a, b, c, d)));

// Use Variables a + d One Time To Get The Needed Output
// console.log(Math.pow(Math.round((a + d) / 10), 4)); // 10000

// Get Integer "2" From d Variable With 4 Methods
// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(-Math.ceil(-d));

// Use Variables b + d To Get This Valus
// console.log(Math.floor((b + d) / 3)); // 66.67 => String
let res = (Math.trunc((b + d) / 10) * 10) / 3;
console.log(String(Math.round(res * 100) / 100)); // 67 => Number
