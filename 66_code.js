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
  // with iteration
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

// function firstOccurence(ar, target) {
//   let start = 0;
//   let end = ar.length - 1;
//   let first = -1;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (ar[mid] === target) {
//       end = mid - 1;
//       first = mid;
//     } else if (ar[mid] < target) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//   return first;
// }
// console.log(firstOccurence([1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20));

function lastOccurence(ar, target) {
  let start = 0;
  let end = ar.length - 1;
  let last = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (ar[mid] === target) {
      start = mid + 1;
      last = mid;
    } else if (ar[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return last;
}

console.log(lastOccurence([1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  // with recursion
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, end);
  }
  return binarySearch(arr, target, start, mid - 1);
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
