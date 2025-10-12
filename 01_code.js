// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let re = /\w@\w\w\.\w/ig;
// let re = /\w+@\w+\.(net|com)/ig;
// let re = /\w+@\w+\.\w+/ig;
// console.log(mails.match(re));
// let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
// let re = /\b0\d+0\b/g;
// let re = /\b0(\d+)?0\b/g;
// let re = /\b0\d*0\b/g;
// console.log(nums.match(re));
let urls = "https://google.com http://www.website.net web.com"; // http + https

let re = /(https?:\/\/)?(www\.)?\w+\.(net|com)/ig;

console.log(urls.match(re));

/**
 XO("ooxx") ➞ true

XO("xooxx") ➞ false

XO("ooxXm") ➞ true
// Case insensitive.

XO("zpzpzpp") ➞ true
// Returns true if no x and o.

XO("zzoo") ➞ false
 */

function XO(str) {
  
  let x = str.match(/x/gi)?.length || 0;
  let o = str.match(/o/gi)?.length || 0;

  return x === o;
}

console.log(XO("ooxx"), true);
console.log(XO("xooxx"), false);

console.log(XO("ooxXm"), true);
console.log(XO("zpzpzpp"), true);
console.log(XO("zzoo"), false);

console.log(XO("Xo"), true);
console.log(XO("x"), false);
console.log(XO("o"), false);

console.log(XO("xxxoo"), false);
console.log(XO(""), true);
