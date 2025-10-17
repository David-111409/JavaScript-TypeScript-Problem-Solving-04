{
  console.log([] + []); // Output: "" empty string
  console.log([] + {}); // Output: "[object Object]"
  console.log({} + []); // Output: [object Object]
  
  console.log({} + {}); // Output: "[object Object][object Object]"
  console.log([1] + [], typeof ([1] + [])); // "1" string
  console.log([1] + "abc"); // "1abc"
}

function theGreatestNumber(ar) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;
  let l = ar.length;
  
  for (let i = 0; i < l; i++) {
    if (ar[i] > first) {
      third = second;
      second = first;
      first = ar[i];
      
    } else if (ar[i] > second && ar[i] != first) {
      third = second;
      second = ar[i];
      
    } else if (ar[i] > third && ar[i] != second && ar[i] != first) {
      third = ar[i];
    }
  }
  
  return [first, second, third];
  
}

console.log(theGreatestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//[10, 9, 8];

{
  function getAge(...args) {
    return typeof args; // it is an array. // object
  }
  
  console.log(getAge(21, 2, 3)); // object

  let nums = [1, 2, 3, 4, 5];
  let [x, ...y] = nums; // x = 1, y = [2, 3, 4 , 5]
  console.log(x, y, typeof y); // 1 [ 2, 3, 4, 5 ] object [array]
}

{
  console.log("1" - -"1"); // 2
  console.log("1" + +"1"); // 11
  console.log("1" + +"1"); // 11
  console.log("1" + - "1"); // 1-1
  console.log("1" - +"1"); // 0
}
