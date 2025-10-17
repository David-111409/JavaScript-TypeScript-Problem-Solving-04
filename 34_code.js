{
  console.log([] + []); // Output: "" empty string
  console.log([] + {}); // Output: "[object Object]"
  console.log({} + []); // Output: [object Object]
  console.log({} + {}); // Output: "[object Object][object Object]"
  console.log([1] + [], typeof ([1] + [])); // "1" string
  console.log([1] + "abc"); // "1abc"
}
