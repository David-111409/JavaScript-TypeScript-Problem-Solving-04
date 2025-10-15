class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
  }

  updateName(newName) {
    this.u = newName;
  }
}

let userOne = new User(100, "Hager", 2000);

console.log(userOne.u);
userOne.updateName("Khaled");
console.log(userOne.u);

// let one = "Hager";
// let two = new String("Hager");
// console.log(one.constructor === two.constructor);
// console.log(one instanceof String, two instanceof String);
// console.log(typeof one, typeof two);
// console.log(one.constructor === String, two.constructor === String);

let one = 100;
let two = new Number(100);
console.log(one.constructor === two.constructor); // Number === Number

console.log(one instanceof Number, two instanceof Number); // fales, true
console.log(typeof one, typeof two); // number, object

let n = 200;
let m = new Number(200);

console.log(n.constructor); // number
console.log(m.constructor); // number
console.log(n.constructor === m.constructor);

console.log(typeof n); // number
console.log(typeof m); // object

console.log(n instanceof Number); // false
console.log(m instanceof Number); // true

// class User {
//   static count = 0;
//   constructor(id, name, salary) {
//     this.i = id;
//     this.n = name;
//     this.s = salary;
//     User.count++;
//   }
// }
// let one = new User(2, "Hager", 2000);
// console.log(User.count);
