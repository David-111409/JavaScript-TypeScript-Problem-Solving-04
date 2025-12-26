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
