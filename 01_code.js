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
