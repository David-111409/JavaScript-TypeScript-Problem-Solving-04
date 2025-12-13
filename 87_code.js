// console.log((200 / 3).toFixed(2));
function signAll(obj, name) {
    for (let el in obj) {
        if (typeof obj[el] === "object") {
            signAll(obj[el], name);
        } else if (el === "signature") {
            obj.signature = name;
        }
    }
    return obj;
}

const name = "Dawoud";
const obj = {
    kitchen: {
        painting: 100,
        piano: 1000,
        signature: "",
    },
    signature: "",
};
const obj2 = {
    bathroom: {
        stereo: 220,
        signature: "",
    },
    cellar: {
        mirror: 10,
        broom: 90,
        signature: "",
    },
    signature: "",
};

console.log(signAll(obj, name), {
    kitchen: {
        painting: 100,
        piano: 1000,
        signature: name,
    },
    signature: name,
});
console.log(signAll(obj2, name), {
    bathroom: {
        stereo: 220,
        signature: name,
    },
    cellar: {
        mirror: 10,
        broom: 90,
        signature: name,
    },
    signature: name,
});

function generateScores() {
    const scores = [];
    for (let i = 0; i < 5; i++) {
        scores.push(Math.floor(Math.random() * 100) + 1);
    }
    let average = scores.reduce((a, b) => a + b, 0) / scores.length;
    average = +average.toFixed(2);
    return {
        scores: scores,
        highest: Math.max(...scores),
        lowest: Math.min(...scores),
        average,
    };
}

console.log(generateScores());

// function getNameAndJob(name, job) {
//     let _name = name;
//     let _job = job;
//     return {
//         getName() {
//             return _name;
//         },
//         getJob() {
//             return _job;
//         },
//     };
// }

// // let person1 = getNameAndJob("John", "Developer");
// // console.log(person1.getName()); // John
// // console.log(person1.getJob()); // Developer

// // let string = "Elzero web school";
// // console.log(string.substring(string.length - 5, string.length - 3));
// // console.log(string.substr(-5, 2));

// let string = "Elzero Web School";
// console.log(string.charAt(2).toUpperCase() + string.slice(3, 6));
// console.log(string.split(" ", 1));
// // let num = 10;
// // let objNum = new Number(10);
// // console.log(num.constructor , objNum.constructor);

// let num = 10;
// let objNum = new Number(10);
// console.log(num.valueOf(), objNum.valueOf());

// let str = "Elzero";
// let objStr = new String("Elzero");
// console.log(str.constructor, objStr.constructor === String);
// console.log(
//     str.valueOf(),
//     objStr.valueOf(),
//     str === objStr,
//     str == objStr,
//     str === objStr.valueOf()
// ); // false true true

// let arr = [1, 2, 3];
// let objArr = new Array(1, 2, 3);
// console.log(arr.constructor, objArr.constructor);
// console.log(arr.valueOf(), objArr.valueOf());
// console.log(arr === objArr, arr == objArr);

// let obj1 = { name: "khaled" };
// let obj2 = new Object({ name: "khaled" });
// console.log(obj1.constructor, obj2.constructor);
// console.log(obj1.valueOf(), obj2.valueOf());
// console.log(obj1 === obj2, obj1 == obj2);

class User {
    static count = 0;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        User.count++;
    }
    static sayHello() {
        return `Hello from the user class.`;
    }
    static sayCount() {
        return `There are ${User.count} users made.`;
    }
}

const user1 = new User("khaled", 20);
const user2 = new User("khaled", 20);
const user3 = new User("khaled", 20);
const user4 = new User("khaled", 20);

console.log(User.count);
console.log(User.sayHello());
console.log(User.sayCount());
