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
