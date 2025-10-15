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

/*
"#FF9933" --> {r: 255, g: 153, b: 51}
*/

function hexStringToRGB(hexString) {
  hexString = hexString.slice(1).toLowerCase();
  let obj = { a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 };
  let ar = [];
  
  for (let i = 0; i < 6; i += 2) {
    ar.push(
      16 *
        (Number.isInteger(+hexString[i]) ? +hexString[i] : obj[hexString[i]]) +
        (Number.isInteger(+hexString[i + 1])
          ? +hexString[i + 1]
          : obj[hexString[i + 1]])
    );
  }
  const [r, g, b] = ar;

  return { r, g, b };
}

console.log(hexStringToRGB("#1A2B3C"));
console.log(hexStringToRGB("#ff9933"));
console.log(hexStringToRGB("#FF9933"));
console.log(hexStringToRGB("#000000"));
