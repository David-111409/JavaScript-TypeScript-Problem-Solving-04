function reverseArray(ar) {
    // let or = [...ar];
    // let rev = [];
    // let f = ar.length - 1;
    // for (let i = f; i >= 0; i--) {
    //     rev.push(ar[i]);
    // }
    // for (let i = 0; i < ar.length; i++) {
    //     rev.push(or.pop());
    // }
    // return rev;
    let half = Math.floor(ar.length / 2);
    for (let i = 0; i < half; i++) {
        // let temp = ar[i];
        // ar[i] = ar[ar.length - 1 - i];
        // ar[ar.length - 1 - i] = temp;
        
        [ar[i], ar[ar.length - i - 1]] = [ar[ar.length - i - 1], ar[i]];
    }
}

let ar = [1, 2, 3, 4, 5];
reverseArray(ar);
console.log(ar);
// output → [4, 3, 2, 1]

// const name = "dawoud";
// const number = "1234";
// console.log(Array.from(name, (ch) => ch.toUpperCase()));
// console.log(Array.from(number, (ch) => ch * 2));
// const ar = [1, 2, 3, 4, 5];
// const newAr = ar.with(-1, "hello");
// const newAr = [...ar];
// newAr[1] = "hello";
// console.log(ar, newAr);
// console.log(ar.at(-1), ar.at(0), ar.at(50));

// const url = "https://dummyjson.com/users";
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));


// let ar = [1000, 2, 3, 4, 55, 6, 10, 22, 110, 200];
// ar.length = 0;
// console.log(ar);

// function maxProduct(ar) {
//    // find it in o(n)
//     let m1 = 0;
//     let m2 = 0;

//     for (let i = 0; i < ar.length; i++) {
//         if (ar[i] > m1) {
//             m2 = m1;
//             m1 = ar[i];
//         } else if (ar[i] > m2) {
//             m2 = ar[i];
//         }
//     }
//     return m1 * m2;

//     // let m1 = 0;
//     // let m2 = 0;
//     // let m3 = 0;
//     // for (let el of ar) {
//     //     if (el > m1) {
//     //         m3 = m2;
//     //         m2 = m1;
//     //         m1 = el;
//     //     } else if (el > m2) {
//     //         m3 = m2;
//     //         m2 = el;
//     //     } else if (el > m3) {
//     //         m3 = el;
//     //     }
//     // }
//     // return m1 * m2 * m3;
// }

// console.log(maxProduct(ar));

// const obj1 = { name: "John", age: 30 };
// const obj2 = { name: "Dawoud", age: 25 };
// let all = {...obj1, ...obj2};
// let  all = {obj1, obj2};
// console.log(all); // { name: 'Dawoud', age: 25 }

// function rest(a, b, c, ...elements) {
//     // return [a, b, c];
//     var x = 10;
//     return elements;
// }
// {
//     var x = 20;
// }
// console.log(rest(1, 2, 3, 4, 5));
// console.log(x);

// let one = "khaled";
// let two = "Sarah";
// [one, two ] = [two, one];
// console.log(one);
// console.log(two);

let one = "subhan";
let two =  1800;

function alternate(first, sec) {
    if(typeof first !== "string"){
        first = String(first);
    }
    if (typeof sec !== "string"){
        sec = String(sec) 
    }
    let max = Math.max(first.length, sec.length);
    let res = "";
    for (let i = 0; i < max; i++) {
        if (first[i]) {
            res += first[i];
        }
        if (sec[i]) {
            res += sec[i];
        }
    }
    return res;
}

console.log(alternate(one, two));
