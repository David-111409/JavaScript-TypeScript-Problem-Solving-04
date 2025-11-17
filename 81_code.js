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
