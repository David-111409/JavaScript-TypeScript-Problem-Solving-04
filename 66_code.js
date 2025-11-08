// let obj = { name: "Khaled", age: 25 };

// console.log(obj.name); // time : O(1)
// delete obj.age; // time : O(1)
// obj.hello = function () {
//   return "Hello " + this.name; // time : O(1)
// };
// console.log(obj.hello()); // time : O(1)
// for (let key in obj) {
//   console.log(key); // time : O(n)
// }

// console.log(Object.keys(obj)); // time : O(n)
// console.log(Object.values(obj)); // time : O(n)
// console.log(Object.entries(obj)); // time : O(n)

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));
