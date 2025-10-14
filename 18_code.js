/**
 Where Are My Glasses?
Oh no! I've lost my glasses, but paradoxically, I need glasses to find my glasses!

Please help me out by showing me the index in the list which contains my glasses. They look like two capital Os, with any number of dashes in between!

This means that both O--O and O------------O are valid glasses, but not O----#--O for example!
Search thoroughly, maybe you'll find my glasses in places such as 'dustO-Odust'
Examples

findGlasses(["phone", "O-O", "coins", "keys"]) ➞ 1

findGlasses(["OO", "wallet", "O##O", "O----O"]) ➞ 3

findGlasses(["O--#--O", "dustO---Odust", "more dust"]) ➞ 1
Notes

All lists will include one valid pair of glasses because I swear I dropped them around here somewhere ...
All elements in the list are strings.
 */

let findGlasses = (ar) => {
    // let l = ar.length;
    // for (let i = 0; i < l; i++) {
    //     if (/O[-]+O/.test(ar[i])) {
    //         return i;
    //     }
    // }
    // return ar.findIndex((el) => /O-+O/.test(el));
    // let indeces = [];
    // let l = ar.length;
    // for (let i = 0; i < l; i++) {
    //     if (/O-+O/.test(ar[i])) {
    //         indeces.push(i);
    //     }
    // }
    // return indeces;
    // return ar.reduce((acc, cur, ind) => {
    //     if (/O-+O/.test(cur)) {
    //         acc.push(ind);
    //     }
    //     return acc;
    // }, []);
    // return ar.reduce((acc, cur) => {
    //     if (/O-+O/.test(cur)) {
    //         acc.push({ glasses: cur, dashes: cur.match(/O-+O/)[0].length - 2 });
    //     }

    //     return acc;
    // }, []);

    return ar
        .reduce((acc, cur) => {
            let match = cur.match(/o-+o|O-+O/g);
            if (match)
                acc.push({
                    glasses: cur,
                    dashes: Math.min(...match.map((el) => el.length - 2)),
                    pairs: match.length,
                });

            return acc;
        }, [])
        .sort((a, b) => a.dashes - b.dashes);
};

console.log(
    findGlasses(["O-O", "O---O", "O##O", "o--o"])
    /*
[
  { glasses: "O-O", dashes: 1, pairs: 1 },
  { glasses: "o--o", dashes: 2, pairs: 1 },
  { glasses: "O---O", dashes: 3, pairs: 1 }
]
*/
);

console.log(
    findGlasses(["O-O---O", "O--O", "dustO----Odust"])
    /*
[
  { glasses: "O--O", dashes: 2, pairs: 1 },
  { glasses: "O-O---O", dashes: 1, pairs: 2 },
  { glasses: "dustO----Odust", dashes: 4, pairs: 1 }
]
*/
);

/*
[
  { glasses: "O-O", dashes: 1, pairs: 1 },
  { glasses: "o--o", dashes: 2, pairs: 1 },
  { glasses: "O---O", dashes: 3, pairs: 1 }
]
*/
console.log(
    findGlasses(["O--#--O", "dustO---Odust", "more dust"])
    /*
[
  { glasses: "dustO---Odust", dashes: 3, pairs: 1 }
]
*/
);
// console.log(findGlasses(["O-O", "O---O", "O##O"]));
// // → [{glasses: "O-O", dashes: 1}, {glasses: "O---O", dashes: 3}]

// // console.log(findGlasses(["O-O", "O--#--O", "dustO---Odust", "O---O"]));
// // → [0, 2, 3]

// console.log(findGlasses(["phone", "O-O", "coins", "keys"]), 1);
// console.log(findGlasses(["OO", "wallet", "O##O", "O----O"]), 3);
// console.log(findGlasses(["O_O", "O-O", "OwO"]), 1);
// console.log(findGlasses(["O--#--O", "dustO---Odust", "more dust"]), 1);
// console.log(findGlasses([
//         "floor",
//         "the floor again",
//         "pockets",
//         "bed",
//         "cabinet",
//         "the top of my head O-O",
//     ]),
//     5
// );
// console.log(findGlasses(["OOOO----~OOO", "-------", "OOOOOOO", "OO-OO-OO-O"]),
//     3
// );
