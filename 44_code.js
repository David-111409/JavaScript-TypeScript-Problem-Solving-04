let nameGen = function(name){
    return `Hello, ${name}!`;
}("david");

console.log(nameGen); // Hello, david!

(function(){
    let count = 2;
    console.log(`Count is :: ${count}`);
})(); // Count is: 0

function makeRug(len, width, char = "#") {
  //   let ar = [];
  //   for (let i = 0; i < len; i++) {
  //     ar[i] = char.repeat(width);
  //   }
  //   return ar;
  return Array(len).fill(char.repeat(width));
}

console.log(makeRug(3, 5));
console.log(makeRug(3, 5, "$"));
console.log(makeRug(2, 2, "A"));
console.log(makeRug(2, 1, "bcb"), ["bcb", "bcb"]);
