function vowelLinks(str) {
    let re = /[aeiou]\s+[aeiou]/i;
    return re.test(str);
}

console.log(vowelLinks("an open fire"), false);
console.log(vowelLinks("the sudden applause"), false);
console.log(vowelLinks("the large appliances"), true);
console.log(vowelLinks("creative environment"), true);
console.log(vowelLinks("Creative Environment"), true);
console.log(vowelLinks("beneficial luggage"), false);
console.log(vowelLinks("the eagle swooped down low"), true);
console.log(vowelLinks("this is not a drill"), false);
console.log(vowelLinks("Patrice Evra"), true);
console.log(vowelLinks("please log on to edabit"), true);
console.log(vowelLinks("the quick brown fox was sad"), false);

/*
testFairness([[4, 3], [2, 4], [1, 2]],
[[6, 2], [4, 2], [1, 1], [1, 1]])
➞ true

// Agatha's pieces: [4, 3], [2, 4], [1, 2]
// Bertha's pieces: [6, 2], [4, 2], [1, 1], [1, 1]

// Total area of Agatha's chocolate
// 4x3 + 2x4 + 1x2 = 12 + 8 + 2 = 22

// Total area of Bertha's chocolate is:
// 6x2 + 4x2 + 1x1 + 1x1 = 12 + 8 + 1 + 1 = 22
*/

function testFairness(ar1, ar2) {
    return (
        ar1.reduce((a, b) => a + b[0] * b[1], 0) ===
        ar2.reduce((a, b) => a + b[0] * b[1], 0)
    );
}

console.log(
    testFairness(
        [
            [1, 5],
            [6, 3],
            [1, 1],
        ],
        [
            [7, 1],
            [2, 2],
            [1, 1],
        ]
    ),
    false
);
console.log(
    testFairness(
        [
            [2, 2],
            [2, 2],
            [2, 2],
            [2, 2],
        ],
        [[4, 4]]
    ),
    true
);
console.log(
    testFairness(
        [
            [1, 2],
            [2, 1],
        ],
        [[2, 2]]
    ),
    true
);
console.log(
    testFairness(
        [
            [1, 2],
            [2, 1],
        ],
        [
            [2, 2],
            [4, 4],
        ]
    ),
    false
);
console.log(
    testFairness(
        [
            [2, 4],
            [1, 1],
            [11, 1],
        ],
        [
            [2, 2],
            [4, 4],
        ]
    ),
    true
);

// let i = 102;

// switch (i) {
//     case 10:
//     case 12:
//         console.log("10 or 12");
//         break;
//     case 20:
//         console.log("20");
//         break;
//     default:
//         console.log("default");
// }

function validateNumberString(str) {
    if (!str) return false;
    let res = Number(str);
    return !Number.isNaN(res);
    
    
}


console.log(validateNumberString(""));
