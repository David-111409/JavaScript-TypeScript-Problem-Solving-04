/**
 
 Write a RegExp that looks for all decimal numbers including integer ones, 

 with the floating point and negative ones.

 */

const REGEXP = /-?\d+(\.\d+)?/g;

let str = "-1.5 0 2 -123.4.";

console.log(str.match(REGEXP));


const validate = (REGEXP) => {
  // if(!//.test(String(REGEXP))) return () => "invalid"
  return function testReg(str) {
    return str.match(REGEXP);
  };
};

const testExp = validate(REGEXP);

console.log(testExp(str), ["-1.5", "0", "2", "-123.4"]);
