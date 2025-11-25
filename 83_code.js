function removeEmptyArrays(arr) {
    return arr.filter((item) => !(item instanceof Array && item.length === 0));
}
console.log(removeEmptyArrays(["a", "b", []]), ["a", "b"]);
console.log(removeEmptyArrays([1, 2, [], 4]), [1, 2, 4]);
console.log(removeEmptyArrays([[], [], [], []]), []);
console.log(removeEmptyArrays([1, 2, 3, 4]), [1, 2, 3, 4]);
console.log(removeEmptyArrays([1, [], [], 4, 0, "", null, undefined, false]), [1, 4]);


{
let x = [1, 2, 3, 4, 5];

function minusOne(ar) {
    let result = [...ar];
    result.pop();
    return result;
}

console.log(minusOne(x));
console.log(minusOne(x));
console.log(minusOne(x));
console.log(minusOne(x));
console.log(minusOne(x));
}
