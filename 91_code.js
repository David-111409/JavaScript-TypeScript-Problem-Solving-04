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

// console.log("❤️".length);

// let a = "❤️".repeat(100);
// console.log(a.length);

// let b = "❤️".repeat(100).split("");
// console.log(b);

// console.log("hello".split(""));

// let c = "hello👍".split("");
// let c = "hello👍";
// console.log(c.length);
// console.log(c.slice(5));
// console.log(c[6]);

// let day = "   friday  ";
// // // You Need To Remove Spaces And Make First Letter Capital => Friday
// day = day.trim();
// day = day.charAt(0).toUpperCase() + day.slice(1);
// console.log(day);

// let day = "Wednesday";
// let day = "Saturday";
// let day = "Sunday";
let day = "Tuesday";

switch (day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;

    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    default:
        console.log("Its Not A Valid Day");
}
// Output => "No Appointments Available"

// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"
