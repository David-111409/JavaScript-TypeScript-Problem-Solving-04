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

function calculateSum(txt) {
    return txt.split("").reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
}

function reverseString(txt) {
    return txt.split("").reduce((acc, cur) => cur + acc, "");
}

console.log(calculateSum("orange"), 636);
console.log(calculateSum("lime"), 423);
console.log(calculateSum("mushroom"), 890);
console.log(reverseString("Think"), "knihT");
console.log(reverseString("world"), "dlrow");
console.log(reverseString("people"), "elpoep");

function hasValidPrice(product) {
    return !!(
        product &&
        typeof product.price === "number" &&
        product.price >= 0
    );
}

console.log(hasValidPrice({ product: "Milk", price: 1.5 }), true);
console.log(hasValidPrice({ product: "Cheese", price: -1 }), false);
console.log(hasValidPrice({ product: "Eggs", price: 0 }), true);
console.log(hasValidPrice({ product: "Flour" }), false);
console.log(hasValidPrice({ product: "Cerials", price: "3.0" }), false);
console.log(hasValidPrice({ product: "Beer", price: NaN }), false);
console.log(hasValidPrice(), false);

function shirtSize({ size = "big" } = {}) {
    return size;
}

const str = `
function shirtSize({size = "big"}) { 
  return size
}
`;

eval(str);

const result = shirtSize();

const code = str.slice(str.lastIndexOf("return"), str.lastIndexOf("}"));
const param = str.slice(0, 26);

const validParams = () => {
    return /\{.*size/.test(param) ? "valid" : "not valid";
};

const validReturn = () => {
    return code.includes("size") ? "valid" : "not valid";
};

const doubleReturns = () => {
    return str.match(/return/g).length >= 2 ? "not valid" : "valid";
};

console.log(doubleReturns(), "valid", "Multiple returns are not allowed.");
console.log(
    validParams(),
    "valid",
    'Do not remove or manipulate the object {size = "big"} inside of the parameters.'
);
console.log(
    validReturn(),
    "valid",
    "Changing the return statement is not allowed."
);
console.log(result, "big");
