// function binarySearch(ar, t) {
//   let left = 0;
//   let right = ar.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (ar[mid] === t) {
//       return mid;
//     } else if (ar[mid] < t) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));

function binarySearch(ar, x, start = 0, end = ar.length - 1) {
  let mid = Math.floor((start + end) / 2);

  if (ar[mid] === x) return mid;

  if (start > end) return -1;

  if (ar[mid] > x) return binarySearch(ar, x, start, mid - 1);

  return binarySearch(ar, x, mid + 1, end);
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));

function sqrt(n) {
  let left = 0;
  let right = n;
  let mid;
  let s;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    let res = mid * mid;
    if (res <= n) {
      left = mid + 1;
      s = mid;
    } else if (res > n) {
      right = mid - 1;
    }
  }

  return s;
}
console.log(sqrt(0));
console.log(sqrt(1));
console.log(sqrt(2));
console.log(sqrt(3));
console.log(sqrt(4));
