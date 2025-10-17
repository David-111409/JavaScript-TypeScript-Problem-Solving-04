console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean('')); // false
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean('Hello')); // true
console.log(Boolean(new Boolean(false))); // true

/**
 isHarshad(209) ➞ true

isHarshad(41) ➞ false

isHarshad(12255) ➞ true
 */

function isHarshad(num) {
  if (!num){
   return false;
  }
 
  let sum = 0;
  let original = num;

  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  
  return original % sum === 0;
}
console.log(isHarshad(209)); // ➞ true
console.log(isHarshad(41)); // ➞ false
console.log(isHarshad(12255)); // ➞ true
console.log(isHarshad(0), false);
console.log(isHarshad(15), false);
console.log(isHarshad(990), true);
console.log(isHarshad(461), false);
console.log(isHarshad(297), false);
console.log(isHarshad(345), false);
console.log(isHarshad(529), false);
console.log(isHarshad(839), false);
console.log(isHarshad(281), false);
console.log(isHarshad(252), true);
console.log(isHarshad(123), false);
console.log(isHarshad(840), true);
console.log(isHarshad(789), false);
console.log(isHarshad(43), false);
console.log(isHarshad(907), false);
console.log(isHarshad(441), true);
console.log(isHarshad(729), false);
console.log(isHarshad(801), true);
console.log(isHarshad(923), false);
console.log(isHarshad(569), false);
console.log(isHarshad(828), true);
console.log(isHarshad(658), false);
console.log(isHarshad(838), false);
console.log(isHarshad(711), true);
console.log(isHarshad(216), true);
console.log(isHarshad(525), false);
console.log(isHarshad(768), false);
console.log(isHarshad(234), true);
console.log(isHarshad(353), false);
console.log(isHarshad(713), false);
