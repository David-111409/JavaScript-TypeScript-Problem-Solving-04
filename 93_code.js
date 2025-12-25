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
