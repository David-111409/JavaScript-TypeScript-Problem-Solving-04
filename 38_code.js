/*
longestTime(1, 59, 3598) ➞ 1

longestTime(2, 300, 15000) ➞ 300

longestTime(15, 955, 59400) ➞ 59400
*/

function longestTime(a, b, c) {
  let first = a * 60;
  let second = c / 60;
  if (first > b && first > second) {
    return a;
  } else if (b > first && b > second) {
    return b;
  } else {
    return c;
  }

  /*
  let [a, op, b] = expression.split(" ");
  a = Number(a);
  b = Number(b);
  switch (op) {
    case "+":
      return `${expression} = ${a + b}`;
    case "-":
      return `${expression} = ${a - b}`;
    case "x":
      return `${expression} = ${a * b}`;
    case "/":
      return `${expression} = ${a / b}`;
    default:
      return "Invalid operator";
  }
  */
  
}

console.log(longestTime(1, 59, 3598), 1);
console.log(longestTime(2, 300, 15000), 300);
console.log(longestTime(15, 955, 59400), 59400);


/*
isSastry(183) ➞ true
// Concatenation of n and its successor = 183184
// 183184 is a perfect square (428 ^ 2)

isSastry(184) ➞ false
// Concatenation of n and its successor = 184185
// 184185 is not a perfect square

isSastry(106755) ➞ true
// Concatenation of n and its successor = 106755106756
// 106755106756 is a perfect square (326734 ^ 2)
*/

function isSastry(n) {
  let result = `${n}${n + 1}`;
  let root = Math.sqrt(Number(result));

  return Number.isInteger(root);
}

console.log(isSastry(183)); // true
console.log(isSastry(184)); // false
console.log(isSastry(106755)); // true
console.log(isSastry(183), true, "Example #1");
console.log(isSastry(184), false, "Example #2");
console.log(isSastry(106755), true, "Example #3");
console.log(isSastry(129987253440921), false);
console.log(isSastry(157175907513603), true);
console.log(isSastry(206611570247935), true);
console.log(isSastry(338752188230098), false);
console.log(isSastry(433610247875715), true);
console.log(isSastry(652333983478884), false);
console.log(isSastry(718717107443715), true);
console.log(isSastry(752199872453889), false);
console.log(isSastry(786704531939448), true);

/*
formatMath("3 + 4") ➞ "3 + 4 = 7"

formatMath("3 - 2") ➞ "3 - 2 = 1"

formatMath("4 x 5") ➞ "4 x 5 = 20"

formatMath("6 / 3") ➞ "6 / 3 = 2"
*/
function formatMath(expression) {
  if (expression.includes("x")) {
    let e = expression.replace("x", "*");
    return `${expression} = ${eval(e)}`;
  }
  return `${expression} = ${eval(expression)}`;
}

console.log(formatMath("3 + 4") === "3 + 4 = 7");
console.log(formatMath("3 - 2") === "3 - 2 = 1");
console.log(formatMath("4 x 5") === "4 x 5 = 20");
console.log(formatMath("6 / 3") === "6 / 3 = 2");
console.log(formatMath("9 / 3") === "9 / 3 = 3");
console.log(formatMath("21 / 3") === "21 / 3 = 7");
console.log(formatMath("24 / 3") === "24 / 3 = 8");
console.log(formatMath("80 / 8") === "80 / 8 = 10");
console.log(formatMath("60 / 30") === "60 / 30 = 2");
console.log(formatMath("44 - 11") === "44 - 11 = 33");
console.log(formatMath("48 + 35") === "48 + 35 = 83");
console.log(formatMath("8 + 5") === "8 + 5 = 13");
console.log(formatMath("46 - 11") === "46 - 11 = 35");
console.log(formatMath("23 x 46") === "23 x 46 = 1058");
console.log(formatMath("11 + 1") === "11 + 1 = 12");
console.log(formatMath("29 - 21") === "29 - 21 = 8");
console.log(formatMath("24 x 26") === "24 x 26 = 624");
console.log(formatMath("47 + 8") === "47 + 8 = 55");
console.log(formatMath("42 - 48") === "42 - 48 = -6");
console.log(formatMath("33 x 44") === "33 x 44 = 1452");
console.log(formatMath("26 + 3") === "26 + 3 = 29");
console.log(formatMath("32 + 17") === "32 + 17 = 49");
console.log(formatMath("3 x 26") === "3 x 26 = 78");
console.log(formatMath("12 x 25") === "12 x 25 = 300");
console.log(formatMath("43 + 31") === "43 + 31 = 74");
console.log(formatMath("28 + 27") === "28 + 27 = 55");
console.log(formatMath("24 - 11") === "24 - 11 = 13");
console.log(formatMath("20 x 50") === "20 x 50 = 1000");
console.log(formatMath("36 - 30") === "36 - 30 = 6");
console.log(formatMath("34 x 48") === "34 x 48 = 1632");
console.log(formatMath("26 + 8") === "26 + 8 = 34");
console.log(formatMath("25 - 44") === "25 - 44 = -19");
console.log(formatMath("24 x 25") === "24 x 25 = 600");
console.log(formatMath("40 x 17") === "40 x 17 = 680");
console.log(formatMath("44 - 7") === "44 - 7 = 37");
console.log(formatMath("37 x 41") === "37 x 41 = 1517");
console.log(formatMath("15 - 1") === "15 - 1 = 14");
console.log(formatMath("16 x 4") === "16 x 4 = 64");
console.log(formatMath("13 x 43") === "13 x 43 = 559");
console.log(formatMath("7 x 11") === "7 x 11 = 77");
console.log(formatMath("12 - 25") === "12 - 25 = -13");
console.log(formatMath("37 + 6") === "37 + 6 = 43");
console.log(formatMath("32 x 46") === "32 x 46 = 1472");
console.log(formatMath("31 x 5") === "31 x 5 = 155");
console.log(formatMath("17 - 37") === "17 - 37 = -20");
console.log(formatMath("31 + 36") === "31 + 36 = 67");
console.log(formatMath("17 x 34") === "17 x 34 = 578");
console.log(formatMath("24 - 3") === "24 - 3 = 21");
console.log(formatMath("48 + 33") === "48 + 33 = 81");
console.log(formatMath("19 + 1") === "19 + 1 = 20");
console.log(formatMath("45 + 1") === "45 + 1 = 46");
console.log(formatMath("34 + 24") === "34 + 24 = 58");
console.log(formatMath("32 + 41") === "32 + 41 = 73");
console.log(formatMath("1 - 21") === "1 - 21 = -20");
console.log(formatMath("40 x 8") === "40 x 8 = 320");
console.log(formatMath("4 - 16") === "4 - 16 = -12");
console.log(formatMath("30 - 43") === "30 - 43 = -13");
console.log(formatMath("26 + 49") === "26 + 49 = 75");
console.log(formatMath("24 x 38") === "24 x 38 = 912");
