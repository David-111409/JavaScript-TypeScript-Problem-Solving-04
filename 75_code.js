/*
Sum Fractions

Create a function that takes an array containing nested arrays as an argument. 
Each subarray has 2 elements. The first element is the numerator and the second element is the denominator. 
Return the sum of the fractions rounded to the nearest whole number.
Examples

sumFractions([[18, 13], [4, 5]]) ➞ 2

sumFractions([[36, 4], [22, 60]]) ➞ 9

sumFractions([[11, 2], [3, 4], [5, 4], [21, 11], [12, 6]]) ➞ 11
*/

function sumFractions(arr) {
  let sum = 0;
  for (let [n, d] of arr) {
    sum += n / d;
  }
  return Math.round(sum);
}

console.log(
  sumFractions([
    [18, 13],
    [4, 5],
  ])
);

console.log(
  sumFractions([
    [36, 4],
    [22, 60],
  ]),
  9
);
console.log(
  sumFractions([
    [-11, 12],
    [18, 13],
    [4, 5],
  ]),
  1
);
console.log(
  sumFractions([
    [11, 12],
    [18, 13],
    [4, 5],
  ]),
  3
);
console.log(
  sumFractions([
    [18, 13],
    [4, 5],
  ]),
  2
);
console.log(
  sumFractions([
    [41, 14],
    [10, 91],
  ]),
  3
);
console.log(
  sumFractions([
    [11, 2],
    [3, 4],
    [5, 4],
    [21, 11],
    [12, 6],
  ]),
  11
);

function releaseYear(album) {
  const albums = {
    2015: ["Vulnicura", "Honeymoon", "Rebel Heart"],
    2016: ["Lemonade", "Blackstar", "A Moon Shaped Pool"],
    2017: ["Flower Boy", "Antisocialites"],
    2018: ["El Mal Querer", "Someone Out There", "Cranberry", "Kamikaze"],
    2019: ["thank u next", "Magdalene", "Ode to Joy"],
    2020: ["Rough and Rowdy Ways", "folklore", "Future Nostalgia", "Colores"],
  };
  return (
    Object.entries(albums).find(([_, albumList]) =>
      albumList.includes(album)
    )?.[0] || "Unknown"
  );
}

console.log(releaseYear("Rebel Heart"), 2015, "error");
console.log(releaseYear("Someone Out There"), 2018, "error");
console.log(releaseYear("Where Wildness Grows"), "Unknown", "error");
console.log(releaseYear("thank u next"), 2019, "error");
console.log(releaseYear(2017), "Unknown", "error");
console.log(releaseYear("Flower Boy"), 2017, "error");
console.log(releaseYear("Kamikaze"), 2018, "error");
console.log(releaseYear("folklore"), 2020, "error");
console.log(releaseYear("Opal"), "Unknown", "error");

/*
const albums = {
  2015: ["Vulnicura", "Honeymoon", "Rebel Heart"],
  2016: ["Lemonade", "Blackstar", "A Moon Shaped Pool"],
  2017: ["Flower Boy", "Antisocialites"],
  2018: ["El Mal Querer", "Someone Out There", "Cranberry", "Kamikaze"],
  2019: ["thank u next", "Magdalene", "Ode to Joy"],
  2020: ["Rough and Rowdy Ways", "folklore", "Future Nostalgia", "Colores"],
};
const albumsObj = {};
for (let year in albums) {
  let names = albums[year];
  // console.log(year, names);
  for (let name of names) {
    albumsObj[name] = year;
  }
}
function releaseYear(album) {
  // return (
  //   Object.entries(albums).find(([_, albumList]) =>
  //     albumList.includes(album)
  //   )?.[0] || "Unknown"
  // );
  return albumsObj[album] ?? "Unknown";
}
*/
