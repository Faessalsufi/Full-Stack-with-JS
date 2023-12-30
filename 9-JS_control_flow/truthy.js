const userEmail = "Someone@somewhere.com";

// if (userEmail) {
//   console.log("Got user email");
// } else {
//   console.log("Don't have user email");
// }

// Falsy values
// false, 0, "", -0, bigint 0n, null, undefined, NaN

// Truthy values
// true, 1, "0", [], {}, 'false', " ", function(){}

const myArray = [];
// if (myArray.length == 0) {
//   console.log("Array is empty");
// }

const myObj = {};
// if (Object.keys(myObj).length == 0) {
//   console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

let value1;

value1 = 3 ?? 6; // 3
value1 = null ?? 6; // 6
value1 = undefined ?? 6; // 6
value1 = null ?? undefined ?? 24; // 24

console.log(value1);

// Ternary Operator

// condition ? true : false

const score = 300;

score < 600 ? console.log("Less than 600") : console.log("Greater than 600");
