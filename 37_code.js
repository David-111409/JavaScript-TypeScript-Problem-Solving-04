class User {
  #s;
  constructor(id, name, salary) {
    this.i = id;
    this.n = name;
    this.#s = salary;
  }
  #privateMethod() {
    return "This is a private method";
  }
  get getSalary() {
    return this.n + " salary is : " + parseInt(this.#s) + "$";
  }
  incrementSalaryAndGetPrivateMethod(amount) {
    this.#s = parseInt(this.#s) + amount;
    return `The salary after increment is ${
      this.#s
    } and also ${this.#privateMethod()}`;
  }
}

let userOne = new User(100, "Hager", "200 USD");
// console.log(userOne.salary, userOne.getSalary()); // undefined 200
// console.log(userOne.constructor === User, userOne instanceof User); // User { constructor: f, i: 100, n: 'Hager' }

console.log(userOne.s * 3); //NaN
console.log(userOne.getSalary); // 200$
console.log(userOne); // User { i: 100, n: 'Hager' }

// console.log(userOne.privateMethod());

class Admin extends User {
  constructor(id, name, salary, permissions) {
    super(id, name, salary);
    this.p = permissions;
  }
}

let adminOne = new Admin(101, "Admin Hager", 300, [
  "create",
  "read",
  "update",
  "delete",
]);

console.log(adminOne.getSalary); // 300$

console.log(adminOne.incrementSalaryAndGetPrivateMethod(100));

console.log(userOne.incrementSalaryAndGetPrivateMethod(100));

console.log(Object.getOwnPropertyNames(User.prototype));

let str = "Hello World";
// console.log(Object.getOwnPropertyNames(str.__proto__));
// console.log(Object.getOwnPropertyNames(String.prototype));
console.log(str.length);
