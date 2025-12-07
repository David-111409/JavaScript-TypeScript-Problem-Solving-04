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
