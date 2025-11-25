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

function gradePercentage(userScore, passScore) {
    let myScore = +userScore.slice(0, -1);
    let pass = +passScore.slice(0, -1);

    if (myScore >= pass) {
        return "You PASSED the Exam";
    } else {
        return "You FAILED the Exam";
    }
}

console.log(gradePercentage("85%", "85%") === "You PASSED the Exam");
console.log(gradePercentage("99%", "85%") === "You PASSED the Exam");
console.log(gradePercentage("65%", "90%") === "You FAILED the Exam");
console.log(gradePercentage("65%", "66%") === "You FAILED the Exam");
console.log(gradePercentage("5%", "8%") === "You FAILED the Exam");
console.log(gradePercentage("8%", "5%") === "You PASSED the Exam");
