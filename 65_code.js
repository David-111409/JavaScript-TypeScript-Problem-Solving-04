// /*
// mostFrequent([1,2,2,3,3,3])  // → 3
// */
// function mostFrequent(arr) {
//     if (arr.length === 0) {
//         return "not found";
//     }
//     let count = {};
//     let max = 0;
//     let result;
//     for (let i = 0; i < arr.length; i++) {
//         const el = arr[i];
//         count[el] = count[el] ? count[el] + 1 : 1;
//         if (count[el] > max) {
//             max = count[el];
//             result = el;
//         }
//     }
//     return result;
// }
// console.log(mostFrequent([1, 2, 2, 3, 3, 3, 2, 2]));
// console.log(mostFrequent([]));

// function flatten(ar) {
//     return ar.reduce((acc, cur) => {
//         return acc.concat(Array.isArray(cur) ? flatten(cur) : cur);
//     }, []);
// }
// console.log(flatten([1, 2, 3, [4, 5, [6, 7], 8], 9, 10, [[[11]]]]));

// function fun(ar) {
//     return ar.reduce((acc, cur) => {
//         acc[cur.id] = cur;
//         return acc;
//     }, {});
// }

// console.log(
//     fun([
//         { id: 1, name: "A" },
//         { id: 2, name: "B" },
//     ])
// );

/*
reverseWords("I love JavaScript")  
// → "I evol tpircSavaJ"
*/

function reverseWords(str) {
    return str
        .split(/\s+/)
        .map((el) => [...el].reverse().join(""))
        .join(" ");
}

console.log(reverseWords("I love JavaScript"));

// console.log(1 ^ 7 , 7 ^ 1);
// console.log(2 ^ 4);
// xorPairs([1, 2, 3, 4, 5], 6)

function xorPairs(arr, k) {
    let pairs = [];
    let set = new Set(arr);
    for (let ele of arr) {
        const theOther = ele ^ k;
        if (set.has(theOther)) {
            pairs.push([ele, theOther]);
            set.delete(theOther);
            set.delete(ele);
        }
    }
    return pairs;
}
console.log(xorPairs([1, 2, 3, 4, 5 , 7], 6));
