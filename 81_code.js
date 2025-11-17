let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array.prototype.myFilter = function (callback) {
//     let result = [];
//     for (let i = 0; i < this.length;i++){
//         if (callback(this[i], i, this)){
//             result.push(this[i]);
//         }
//     }
//     return result;
// };

// console.log(ar.myFilter((n) => n % 2));

Array.prototype.myMap = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        let output = callback(this[i]);
        result.push(output);
    }
    return result;
};

// console.log(ar.myMap((n) => n * 2));
function sqr(n) {
    if (n < 0 || typeof n === "string" || isNaN(n)) return NaN;
    let left = 0;
    let right = n;
    let result;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === n) {
            return mid;
        } else if (mid * mid < n) {
            left = mid + 1;
            result = mid;
        } else if (mid * mid > n) {
            right = mid - 1;
        }
    }
    return result;
}
console.log(sqr(0));

console.log(Math.sqrt("hello"));
console.log(Math.sqrt(NaN));
console.log(Math.sqrt(-Infinity));
