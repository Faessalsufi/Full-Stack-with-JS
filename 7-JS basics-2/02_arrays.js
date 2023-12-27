const marvel_heros = ["Thor", "Iron man", "Spider man"];
const dc_heros = ["Thor", "Iron man", "Spider man"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros[3][0]);

allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros); // concat the both arrays

// some use spread operator instead on concat
const allNewHeros = [...marvel_heros, ...dc_heros];
// console.log(allNewHeros);

const anotherArray = [
  1,
  2,
  32,
  4,
  5,
  6,
  [, 1, 2, 32, 4, 6],
  56,
  [[1, 2, 5, 6, 4], 12, , 51, 4, 2],
];

const realAnotherArray = anotherArray.flat(Infinity);
// console.log(realAnotherArray);

console.log(Array.isArray("Sufi"));
console.log(Array.from("Sufi"));
console.log(Array.from({ name: "Sufi" })); // it will give empty array if it does not able to make an array we have to give key or values array we want

const score1 = 300;
const score2 = 600;
const score3 = 900;

console.log(Array.of(score1, score2, score3));
