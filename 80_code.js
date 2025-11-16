var majorityElement = function (nums) {
    let cand = null;
    let count = 0;
    for (let ele of nums){
        if (count === 0){
            cand = ele;
        }
        count += (cand === ele) ? 1 : -1;
    }
    return cand;
};
console.log(majorityElement([2, 3, 2, 2]));

// console.log(+!!NaN * ""- -[,]); // false => 0 * "" => 0

// console.log(!!" " * 1); // true => 1 * 1 => 1
// console.log(!!" " * 1); // true => 1 * 1 => 1

String.prototype.camelCase = function () {
    //your code here
    return this.replace(/^\w|\s([a-zA-Z])/g, (e) => {
        if (e.length === 1) {
            return e.toUpperCase();
        } else {
            return e[1].toUpperCase();
        }
    });
};
function squareDigit(n) {
    // return +[...(n + "")].reduce((a, b) => a + b * b, "");
    return +[...(n + "")].map((a) => a * a).join("");
}
console.log(squareDigit(223));
console.log("hello world from the country of Egypt".camelCase());
