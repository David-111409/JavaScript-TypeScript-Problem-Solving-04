function cars(wheels, bodies, figures) {
  return Math.min(Math.floor(wheels / 4), bodies, Math.floor(figures / 2));
}

console.log(cars(37, 15, 20), 9);
console.log(cars(72, 7, 21), 7);
console.log(cars(9, 44, 34), 2);
console.log(cars(50, 38, 7), 3);
console.log(cars(68, 9, 44), 9);
console.log(cars(3, 29, 54), 0);
console.log(cars(28, 34, 80), 7);
console.log(cars(88, 50, 83), 22);
console.log(cars(66, 18, 21), 10);
console.log(cars(97, 6, 10), 5);
console.log(cars(921, 310, 350), 175);
console.log(cars(736, 430, 851), 184);
console.log(cars(405, 379, 740), 101);
console.log(cars(593, 78, 389), 78);
console.log(cars(875, 370, 675), 218);
console.log(cars(863, 274, 203), 101);
console.log(cars(959, 331, 537), 239);
console.log(cars(416, 340, 551), 104);
console.log(cars(692, 348, 543), 173);
console.log(cars(527, 412, 951), 131);
