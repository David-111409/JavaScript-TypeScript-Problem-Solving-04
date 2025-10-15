// class User {
//   static count = 0;
//   constructor(id, name, salary) {
//     this.i = id;
//     this.n = name;
//     this.s = salary;
//     User.count++;
//   }
//   static sayHello() {
//     return `Hello From The Class`;
//   }
//   static MemberCount() {
//     return `Count of Memmbers >> ${User.count}`;
//   }
// }
// let one = new User(2, "Hager", 2000);
// let two = new User(2, "Hager", 2000);
// let _3 = new User(3, "Khaled", 10_000);
// console.log(one.count); // undefined
// console.log(User.count); // 3
// console.log(User.sayHello());
// console.log(User.MemberCount()); // 2

// let filterNumbers = function (str) {
//   return str
//     .split("")
//     .filter((c) => isNaN(c))
//     .join("");
// };
// console.log(filterNumbers("tesw20t23"));

/*
sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7]
 */

function sumPairs(ints, s) {
  let st = new Set();
  let l = ints.length;
  for (let i = 0; i < l; i++) {
    let one = ints[i];
    let two = s - one;
    if (st.has(two)) {
      return [two, one];
    }
    st.add(one);
  }
}
console.log(sumPairs([10, 5, 2, 3, 7, 5, -1, 11, 8, 2], 10));
console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));

function largestPairSum(numbers) {
  let first = -Infinity;
  let second = -Infinity;
  for (let number of numbers) {
    if (number > first) {
      second = first;
      first = number;
    } else if (number > second) {
      second = number;
    }
  }
  return first + second;
}

console.log(largestPairSum([100, 2, -1, 3, -3, 10, 5, 50, 90]));
