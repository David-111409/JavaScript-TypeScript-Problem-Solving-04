{
const a = [1, 2, 3];
const b = a.slice(); // Create a shallow copy of array a
b[0] = 0; // Modify the first element of array b

console.log(a, b); // [1, 2, 3 ] [0, 2, 3]
}

{
  let a = 5;
  let b = a++; // b = 5, a = 6
  console.log(a + b); // 11
}

{
  let nums = [1, 2, 3, 4];
  delete nums[1];
  console.log(nums, nums.length); //array = [1, empty, 3, 4] , length = 4
}

{
  let nums = [1, 2, 3].push(2, 3);
  console.log(nums);

  let x = [20, 1, 3].sort(); // [1, 20, 3]
  let rev = [2, 1, 3].reverse();

  console.log(x, rev);
  console.log(1 + false); // 1
  console.log(1 + true); // 2
  console.log(1 - false); // 1
  console.log(1 - true); // 0
  console.log(1 + null); // 1

  let arr = [1, 2, 3];
  let str = "1,2,3";
  console.log(arr == str); // true
  console.log(arr === str); // false
}

