let nameGen = function(name){
    return `Hello, ${name}!`;
}("david");

console.log(nameGen); // Hello, david!

(function(){
    let count = 2;
    console.log(`Count is :: ${count}`);
})(); // Count is: 0
