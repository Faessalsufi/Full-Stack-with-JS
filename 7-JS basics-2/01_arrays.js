// Arrays

const myArr = ["Sufi", 3, 6, 9, true];
const myHeros = ["Superman", "Batman"];

// console.log(myArr[0]); // we can access elements using index
const myArr2 = new Array(1, 2, 3, 4, 5, 6);

// we have two prototype one for array and other for object

// Array methods

// myArr.push(6);
// myArr.push(12);
// myArr.pop(12);

myArr.unshift("Un Shifted"); // add element on first place

myArr.shift(); // remove the first element from the array

// console.log(myArr.includes(6)); // gives boolean
// console.log(myArr.indexOf(9)); // gives index

const newArr = myArr.join(); // gives a string as o/p

// console.log(myArr);
// console.log(newArr);

// Slice and Splice

console.log("Original", myArr);

const sliceArr = myArr.slice(1, 3);
console.log("After Slice", sliceArr);
console.log("After Slice Original", myArr);

const spliceArr = myArr.splice(1, 3);
console.log("After Splice", spliceArr);
console.log("After Splice Original", myArr);
