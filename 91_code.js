const users = [
    { name: "Ali", active: true },
    { name: "Sara", active: false },
    { name: "John", active: true },
];

const getActiveUserNames = (users) =>
    users.reduce((acc, user) => {
        if (user.active) acc.push(user.name);
        return acc;
    }, []); // ['Ali', 'John']Names
console.log(getActiveUserNames(users));

// let job = "tester";

// let salary = 0;

// switch (job) {
//     case "manager":
//         salary = 100000;
//         break;
//     case "developer":
//         salary = 80000;
//         break;
//     case "tester":
//         salary = 50000;
//         break;
//     default:
//         salary = 0;
//         break;
// }

// console.log("The salary of " + job + " is " + salary);

let holdiays = 2;
let money = 0;

switch (holdiays) {
    case 0:
        money = 20000;
        break;
    case 1:
    case 10:
        money = 10000;
        break;
    case 2:
        money = 40;
        break;
    default:
        money = 0;
        break;
}
console.log("Money: " + money);

if (holdiays === 0) {
    money = 20000;
} else if (holdiays === 1 || holdiays === 10) {
    money = 10000;
} else if (holdiays === 2) {
    money = 40;
}
console.log("Money: " + money);
