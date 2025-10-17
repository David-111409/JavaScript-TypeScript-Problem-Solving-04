// {
//     console.log(0 || 1); // 1
//     console.log(1 || 0); // 1
//     console.log(0 && 1); // 0
//     console.log(1 && 0); // 0
//     console.log(1 && 2); // 2
// }

class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

class Admin extends User {
  constructor(id, username, adminLevel) {
    super(id, username);
    this.a = adminLevel;
  }

  sayHello() {
    return `Hello ${this.u} admin / your level is ${this.a}.`;
  }
}

class SuperAdmin extends Admin {
  constructor(id, username, adminLevel, superPower) {
    super(id, username, adminLevel);
    this.s = superPower;
  }

  sayHello() {
    return `Hello ${this.u} super admin / your level is ${this.a} and your super power is ${this.s}.`;
  }
}
let user1 = new User(1, "Alice");
let admin1 = new Admin(2, "Bob", "super");
let superOne = new SuperAdmin(3, "Charlie", "super", "all");

console.log(user1.i); // 1
console.log(admin1.a); // super
console.log(user1.u); // Alice

console.log(user1.sayHello()); // Hello Alice
console.log(admin1.sayHello()); // Hello Bob
console.log(superOne.sayHello()); // Hello Charlie

console.log(superOne.i); // 3


function isNarcissistic(num) {
  let len = num.toString().length;
  let originalNum = num;
  let sum = 0;

  while (num) {
    let digit = num % 10;

    sum += digit ** len;

    num = Math.floor(num / 10);
  }

  return sum === originalNum;
}

console.log(isNarcissistic(0), true, "0 is narcissistic");
console.log(isNarcissistic(1), true, "1 is narcissistic");

console.log(isNarcissistic(5), true, "5 is narcissistic");

console.log(isNarcissistic(7), true, "7 is narcissistic");

console.log(isNarcissistic(153), true, "153 is narcissistic");
console.log(isNarcissistic(370), true, "370 is narcissistic");

console.log(isNarcissistic(371), true, "371 is narcissistic");

console.log(isNarcissistic(1634), true, "1634 is narcissistic");
console.log(isNarcissistic(9004), false);

console.log(isNarcissistic(2546), false);

console.log(isNarcissistic(2124), false);

console.log(isNarcissistic(8345), false);
