// function showAge() {
//   this.age = 0;
//   let objThis = this;
//   setInterval(function () {
//     objThis.age++;
//     console.log(objThis.age);
//   }, 2000);
// }
// showAge();
// console.log("Hello");

function showAge() {
  this.age = 0;

  setInterval(() => {
    console.log(this.age++);
  }, 2000);
}

// showAge();
