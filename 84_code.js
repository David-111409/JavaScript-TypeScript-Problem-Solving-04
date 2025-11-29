function floatSum(a, b) {
    let sum = a + b;
    return +sum.toFixed(6);
}

console.log(floatSum(0.1, 0.2) === 0.3);
console.log(floatSum(0.2, 0.3) === 0.5);
console.log(floatSum(8.4, 8.8) === 17.2);
console.log(floatSum(5.7, 4.3) === 10);
console.log(floatSum(5, 0.81) === 5.81);
console.log(floatSum(0.81, 99) === 99.81);
console.log(floatSum(99.1, 0.109) === 99.209);
console.log(floatSum(50.1234, 11.5678) === 61.6912);
console.log(floatSum(3.4444, 3.5555) === 6.9999);
console.log(floatSum(2.12022, 1.110001) === 3.230221);

const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// let index = 0;
// let l = ar.length;
// for (let i = 0; i < l; i++) {
//     if (ar[i] % 2 === 0) {
//         ar[index++] = ar[i];
//     } else if (ar[i] % 2 === 1) {
//         ar.push(ar[i]);
//     }
//     ar.splice(i, 1);
// }

// console.log(ar);

let index = 0;
let l = ar.length;
for (let i = 0; i < l; i++) {
    if (ar[i] % 2 === 0) {
        [ar[index], ar[i]] = [ar[i], ar[index]];
        index++;
    }
}

console.log(ar);

// function addEvenfirst(ar){
//     let ind = 0;
//     let l = ar.length;
//     for (let i = 0; i < l; i++){
//         if (ar[i] % 2 == 0){
//             [[ar[ind], ar[i]]] = [[ar[i], ar[ind]]];
//             ind++;
//         }
//     }
//     return ar;
// }

// console.log(addEvenfirst([2, 1, 3, 4, 5]));

function addZerosLast(ar) {
    let l = ar.length;
    let ind = l - 1;
    for (let i = l - 1; i >= 0; i--) {
        if (ar[i] == 0) {
            ar.push(ar[i]);
            ar.splice(i, 1);
        }
    }
    return ar;
}

console.log(addZerosLast([2, 0, 3, 1, 0, 5, 10, 0, 6, 3, -1, 0]));
