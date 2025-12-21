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

// const data = {
//     count: 1,
//     items: ["a", "b"],
// };

// // Clone 1
// const shallow = { ...data };

// // Clone 2
// const deep = structuredClone(data);

// // Changes
// shallow.count = 2;
// shallow.items[0] = "x";

// deep.items.push("c");

// console.log(data);
// console.log(shallow);
// console.log(deep);

// const state = {
//     user: {
//       name: "Sara"
//     },
//     logs: []
//   };

//   // Clone
//   const shallow = { ...state };

//   // Update 1
//   shallow.user = { name: "Mona" };

//   // Update 2
//   shallow.logs.push("User updated");

//   console.log(state);
//   console.log(shallow);

// const config = {
//     theme: "dark",
//     options: {
//         fontSize: 14,
//     },
// };

// // Clone A
// const shallow = { ...config };

// // Clone B
// const deep = structuredClone(config);

// // Changes
// shallow.theme = "light";
// shallow.options.fontSize = 18;

// deep.options.fontSize = 20;

// console.log(config);
// console.log(shallow);
// console.log(deep);

// const original = {
//     name: "User",
//     skills: ["JS", "Python"],
//     address: {
//         city: "Cairo",
//         zip: 12345,
//     },
// };

// // Clone A
// const cloneA = { ...original };

// // // Clone B
// const cloneB = structuredClone(original);

// // // Mutations
// cloneA.name = "Admin";
// // cloneA.skills.push("C++");
// cloneA.address.city = "Alex";
// cloneA.skills = ["JS"];

// cloneB.skills.pop();
// cloneB.address.zip = 99999;

// console.log(original);
// console.log(cloneA);
// console.log(cloneB);

// const user = {
//     name: "Ali",
//     scores: [10, 20] // [10, 20, 30]
//   };

//   // Clone 1
//   const shallow = { ...user };

//   // Clone 2
//   const deep = structuredClone(user);

//   // Changes
//   shallow.name = "Omar";
//   shallow.scores.push(30);

//   deep.scores.push(40);

//   console.log(user);
//   console.log(shallow);
//   console.log(deep);

function multiplyBy(n) {
    return function (x) {
        return x * n;
    };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(10));
console.log(triple(10));
