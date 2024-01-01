const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const addedNum = myNumbers.map((num) => {
//   return num + 10;
// });
// console.log(addedNum);

//! Chaining
const addedNum = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 24);

console.log(addedNum);
