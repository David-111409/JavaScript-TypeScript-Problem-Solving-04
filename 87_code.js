// console.log((200 / 3).toFixed(2));
function signAll(obj, name) {
    for (let el in obj) {
        if (typeof obj[el] === "object") {
            signAll(obj[el], name);
        } else if (el === "signature") {
            obj.signature = name;
        }
    }
    return obj;
}

const name = "Dawoud";
const obj = {
    kitchen: {
        painting: 100,
        piano: 1000,
        signature: "",
    },
    signature: "",
};
const obj2 = {
    bathroom: {
        stereo: 220,
        signature: "",
    },
    cellar: {
        mirror: 10,
        broom: 90,
        signature: "",
    },
    signature: "",
};

console.log(signAll(obj, name), {
    kitchen: {
        painting: 100,
        piano: 1000,
        signature: name,
    },
    signature: name,
});
console.log(signAll(obj2, name), {
    bathroom: {
        stereo: 220,
        signature: name,
    },
    cellar: {
        mirror: 10,
        broom: 90,
        signature: name,
    },
    signature: name,
});

function generateScores() {
    const scores = [];
    for (let i = 0; i < 5; i++) {
        scores.push(Math.floor(Math.random() * 100) + 1);
    }
    let average = scores.reduce((a, b) => a + b, 0) / scores.length;
    average = +average.toFixed(2);
    return {
        scores: scores,
        highest: Math.max(...scores),
        lowest: Math.min(...scores),
        average,
    };
}

console.log(generateScores());
