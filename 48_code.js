let fun = function (country, price) {
  return (
    "From " +
    country +
    " Hello " +
    this.first +
    " " +
    this.second +
    " /Your Price is " +
    price
  );
};

console.log(fun.call({ first: "Khaled", second: "Dawoud" }, "Egypt", 100)); // Hello Khaled Dawoud
console.log(fun.call({ first: "Muhammad", second: "Ahmed" }, "Germany", 300)); // Hello Muhammad Ahmed

function hello(name, age) {
  return `We want to say ${this.say} ${name} Your Age is ${age}`;
}

console.log(hello.call({ say: "Hello" }, "Khaled", 25));

console.log(hello.call({ say: "Welcome" }, "Sarah", 30));
console.log(hello.apply({ say: "Welcome" }, ["Sarah", 30]));

console.log(hello.apply({ say: "Hello" }, ["Khaled", 25]));
console.log(hello.bind({ say: "Hi" }, "Omar", 28)());

class User {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }
  details = (country, age) =>
    `Hello ${this.first} ${this.second} From ${country} Your Age is ${age}`;
}

let userOne = new User("Khaled", "Dawoud");
// let show = userOne.details.bind({}, "Egypt", 30);
let show = userOne.details.bind({});

console.log(show("Egypt", 30)); // Hello Khaled Dawoud From Egypt Your Age is 30

let obj = {
  title: "Dawoud",
  sayTitle: function () {
    return `Title is ${this.title}`;
  },
};

console.log(obj.sayTitle.bind({ title: "Dawoud" })()); // Title is Dawoud
console.log(obj.sayTitle.apply({ title: "Dawoud" })); // Title is Dawoud
console.log(obj.sayTitle.call({ title: "Dawoud" })); // Title is Dawoud
