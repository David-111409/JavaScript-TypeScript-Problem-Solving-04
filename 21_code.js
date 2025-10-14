// function onlyDuplicates(str) {
//     let map = new Map();
//     let dup = "";
//     for (let letter of str) {
//         map.set(letter, (map.get(letter) || 0) + 1);
//     }
//     for (let l of str) {
//         if (map.get(l) > 1) {
//             dup += l;
//         }
//     }
//     return dup;
// }

// console.log(onlyDuplicates("aabacec"));

function solution(...ar) {
    // return ar.length === new Set(ar).size;
    let seen = new Set();
    for (let el of ar){
        if (seen.has(el)) return true;
        seen.add(el);
    }
    return false;
}

console.log(solution(1, 2, 3, 1));
