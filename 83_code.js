function removeEmptyArrays(arr) {
    return arr.filter((item) => !(item instanceof Array && item.length === 0));
}
console.log(removeEmptyArrays(["a", "b", []]), ["a", "b"]);
console.log(removeEmptyArrays([1, 2, [], 4]), [1, 2, 4]);
console.log(removeEmptyArrays([[], [], [], []]), []);
console.log(removeEmptyArrays([1, 2, 3, 4]), [1, 2, 3, 4]);
console.log(removeEmptyArrays([1, [], [], 4, 0, "", null, undefined, false]), [1, 4]);
