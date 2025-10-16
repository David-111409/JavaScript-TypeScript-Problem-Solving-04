const arrow = () => {
  console.log(this.count);
};
arrow(); // undefined

const obj = {
  count: 42,
  arrow: () => {
    console.log(this.count);
  },
  regular() {
    console.log(this.count);
  }
};
obj.arrow(); // undefined
obj.regular(); // 42

{
let str = "Change";
str = str.replace("C", "R");
console.log(str);

let value = "5" - 2;
console.log(value); // 3
}

{
  let ar = [1, 2, 2, 1, 2].push(3);
  // ar.push(4);
  console.log(ar); // error

  // give me more examples like this
  let arr = [5, 6, 7];
  let newLength = arr.push(8);
  console.log(newLength); // 4
  console.log(arr); // [5, 6, 7, 8]
  
  arr.push(9, 10);
  console.log(arr); // [5, 6, 7, 8, 9, 10]
  
  let emptyArr = [];
  let len = emptyArr.push(1);
  console.log(len); // 1
  console.log(emptyArr); // [1]
  emptyArr.push(2, 3, 4);
  console.log(emptyArr); // [1, 2, 3, 4]

  let r = [2, 3].push(4);
  let n = r.push(5);
  console.log(r); // 3
  console.log(n); // error
}

{
const obj = { name: "khaled" };
let n = ["name"];
obj[n] = "ahmed";
console.log(obj.name);
// Output: "ahmed"

const example1 = { age: 25 };
let key1 = ["age"];
example1[key1] = 30;
console.log(example1.age);
// Output: 30
}

{
  let ar = [1, 2, 3];
  delete ar[1];
  console.log(ar); // [1, <1 empty item>, 3]
  console.log(ar.length); // 3
  console.log(ar[1]); // undefined
}
