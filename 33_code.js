{
const a = [1, 2, 3];
const b = a.slice(); // Create a shallow copy of array a
b[0] = 0; // Modify the first element of array b

console.log(a, b); // [1, 2, 3 ] [0, 2, 3]
}

