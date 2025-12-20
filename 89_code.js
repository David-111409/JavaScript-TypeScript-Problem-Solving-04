// function createCounter() {
//     let count = 0;
//     return {
//         get count() {
//             return count++;
//         },
//     };
// }

// const counter = createCounter();
// console.log(counter.count);
// console.log(counter.count);
// console.log(counter.count);
// console.log(counter.count);

function createCounter() {
    let i = 0;
    return function () {
        return i++;
    };
}

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

let ar = [2, 10, 2, 0, 10, -1, 0, 2, 10, 8, 200];

function removeZeros(ar) {
    // for (let i = ar.length - 1; i >= 0; i--) {
    //     if (ar[i] === 0) {
    //         ar.splice(i, 1);
    //         ar.push(0);
    //     }
    // }
    // return ar;
    let pointer = 0;
    for (let i = 0; i < ar.length ; i++){
        if (ar[i] !== 0) {
            ar[pointer] = ar[i];
            pointer++;
        }
    }

    while (pointer < ar.length){
        ar[pointer] = 0;
        pointer++;
    }
    return ar
}

removeZeros(ar);
console.log(ar);

let user = { name: "Dawoud", age: 28, country: { city: "Mit" } };
// let clone = { ...user };
// let clone = Object.assign({}, user);
let clone = JSON.parse(JSON.stringify(user));
user.name = "Ahmed";
user.country.city = "Cairo";
console.log(user, clone);
