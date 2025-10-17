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

