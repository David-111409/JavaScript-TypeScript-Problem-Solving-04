/**
 Create a function that takes an array of superheroes / 
 superheroines names and returns an array of only superheroe names ending in "man". 
 Return the names in alphabetical order.

Examples

superheroes(["Batman", "Superman", "Spider-man", "Hulk", "Wolverine", "Wonder-Woman"])
➞ ["Batman", "Spider-man", "Superman"]

superheroes(["Catwoman", "Deadpool", "Dr.Strange", "Captain-America", "Aquaman", "Hawkeye"])
➞ ["Aquaman"]

superheroes(["Wonder-Woman", "Catwoman", "Invisible-Woman"])
➞ []
 */

const superheroes = (ar) => {
    let r1 = /man$/i;
    let r2 = /woman$/i;
    return ar.filter((word) => r1.test(word) && !r2.test(word)).sort();
};

console.log(
    superheroes([
        "Batman",
        "Superman",
        "Spider-man",
        "Hulk",
        "Wolverine",
        "Wonder-Woman",
    ]),
    ["Batman", "Spider-man", "Superman"]
);
console.log(
    superheroes([
        "Catwoman",
        "Deadpool",
        "Dr.Strange",
        "Captain-America",
        "Aquaman",
        "Hawkeye",
    ]),
    ["Aquaman"]
);
console.log(
    superheroes([
        "Iron-man",
        "Thor",
        "Black-Panther",
        "Iceman",
        "Catwoman",
        "Invisible-Woman",
    ]),
    ["Iceman", "Iron-man"]
);
console.log(
    superheroes([
        "Batman",
        "Superman",
        "Spider-man",
        "Hulk",
        "Wolverine",
        "Deadpool",
        "Dr.Strange",
        "Captain-America",
        "Aquaman",
        "Hawkeye",
        "Iron-man",
        "Thor",
        "Black-Panther",
        "Iceman",
    ]),
    ["Aquaman", "Batman", "Iceman", "Iron-man", "Spider-man", "Superman"]
);

console.log(superheroes(["Wonder-Woman", "Catwoman", "Invisible-Woman"]), []);

console.log(/woman$/i.test("Superman"));

console.log(/man$/i.test("Superman"));
