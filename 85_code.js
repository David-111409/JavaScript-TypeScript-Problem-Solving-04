// console.log("Hello from try.js");

// const user = {name: "Khaled", age: 30};
// let name, age;

// ({name, age} = user);
// console.log(name, age);
// const ar = [1, 2, 3, 4, 5];

// const [first, , , , last] = ar;

// console.log(first, last);

/*
  Destructuring
  - Challenge
*/

let chosen = 3;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// for (let obj of myFriends) {
//     const {
//         title,
//         age,
//         available,
//         skills: [skill1, skill2],
//     } = obj;
//     console.log(
//         "Title:",
//         title,
//         "Age:",
//         age,
//         "Available:",
//         available,
//         "His skills:",
//         skill1,
//         skill2
//     );
// }

function showNumber(chosen) {
    const {
        title,
        age,
        available,
        skills: [skill1, skill2],
    } = myFriends[chosen - 1];
    console.log(
        "Title:",
        title,
        "\nAge:",
        age,
        available ? "\nAvailable" : "\nNot Available",
        "\nHis skills:",
        skill1,
        skill2
    );
}

showNumber(chosen);

const user = {
    id: 101,
    name: "Muhammad",
    contact: {
        email: "muhammad@example.com",
        phone: "+201234567890",
    },
    address: {
        city: "Cairo",
        country: "Egypt",
    },
    skills: ["JavaScript", "React", "Node.js"],
};

const {
    name,
    contact: { email },
    address: { city },
    skills: [firstSkill],
} = user;

console.log(name);
console.log(email);
console.log(city);
console.log(firstSkill);

const product = {
    id: 5001,
    title: "MacBook Air M2",
    price: 1200,
    details: {
        brand: "Apple",
        color: "Space Gray",
        specs: {
            ram: "16GB",
            storage: "512GB SSD",
        },
    },
    reviews: [
        { user: "Ali", rating: 5 },
        { user: "Sara", rating: 4 },
    ],
};

const {
    title: productTitle,
    details: {
        brand,
        specs: { ram },
    },
    reviews: [{ rating: firstRating }],
    discount = "Not available",
} = product;
console.log(productTitle);
console.log(brand);
console.log(ram);
console.log(firstRating);
console.log(discount);
