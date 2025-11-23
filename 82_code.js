/**
 * 
validate('{}[]()') 
// true
validate('{[()]}') 
// true
validate('{[}]') 
// false, they are not in the right order
validate('{}}') 
// false, last `}` is not paired with `{`
 */

function validate(str) {
    let stack = [];
    let obj = { "(": ")", "{": "}", "[": "]" };
    for (let el of str) {
        if ("([{".includes(el)) {
            stack.push(el);
        } else {
            if (obj[stack.pop()] !== el) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(validate("{[()]{}"));

function flatten(ar, depth = 1) {
    return ar.reduce((acc, cur) => {
        if (Array.isArray(cur) && depth > 0) {
            return acc.concat(flatten(cur, depth - 1));
        }
        depth = depth - 1;
        return acc.concat(cur);
    }, []);
}

console.log(flatten([[[2, 3], 4, 5, [[[4]]], [[[6]]]]], 2));
console.log(flatten([1, [2], [3, [4]]], 1));

// Write a function that takes in a string and returns the number of unique characters in the string

function uniqueCharacters(str) {
    return new Set(str).size;
}

console.log(uniqueCharacters("hello"));
console.log(uniqueCharacters("world"));
console.log(uniqueCharacters("javascript"));

const words = ["Apple", "banana", "Cherry", "apricot", "blueberry", "carrot"];

const fitlerByFirstLetter = words.reduce((acc, cur) => {
  let firstLetter = cur[0].toLowerCase();
  if (!acc[firstLetter]) {
    acc[firstLetter] = [];
  }
  acc[firstLetter].push(cur);
  return acc;
}, {});

console.log(fitlerByFirstLetter);
