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
