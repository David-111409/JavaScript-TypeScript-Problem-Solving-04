// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// let userOne = new User(100, "Elzero");
// console.log(userOne.u);
// console.log(userOne.sayHello());

// User.prototype.sayWelcome = function () {
//   return `Welcome ${this.u}`;
// };

// console.log(userOne.sayWelcome());
// // Object.prototype.love = "dawoud";
// console.log(Object.getOwnPropertyNames(User.prototype), userOne.love);

// String.prototype.addDot = function () {
//   return `.${this}.`;
// };

// let str = "Elzero";
// console.log(str.addDot());

// const obj = { a: 1, b: 2 };
// Object.defineProperty(obj, "c", {
//   writable: false,
//   enumerable: true,
//   configurable: true,
//   value: 3,
// });

// Object.defineProperty(obj, "c", {
//   writable: true,
//   enumerable: true,
//   configurable: false,
//   value: 510,
// });

// obj.c = 100;
// console.log(Object.getOwnPropertyNames(obj));
// for (let key in obj) {
//   console.log(key);
// }
// console.log(delete obj.c);
// console.log(obj);

const obj = { a: 1, b: 2 };
console.log(Object.getOwnPropertyDescriptor(obj, "a"));
console.log(Object.getOwnPropertyDescriptor(obj, "b"));

Object.defineProperties(obj, {
  c: { value: 3, writable: true },
  d: { value: 4, writable: false },
});

obj.c = 100;
obj.d = 200;

console.log(Object.getOwnPropertyDescriptor(obj, "c"));
console.log(Object.getOwnPropertyDescriptor(obj, "d"));
