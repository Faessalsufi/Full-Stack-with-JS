// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

let name = "Something";
let age = 24;
let isLoggedIn = true;
let outsideTemp = null;
let state;

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId); // false

const bigNumber = 123456n;
// console.log(typeof bigNumber);

// Non-primitive OR Reference

// Array, Objects, Functions

const heros = ["IronMan", "SuperMan", "MagicMan"];

const info = {
  name: "Sufi",
  age: 24,
};

const myFunction = function () {
  console.log("Hello World!");
};

// ----------------------------------------------------------
// Stack(Primitive) and Heap(Non-Primitive)

let myName = "Human";

yourName = myName;

yourName = "Alien";

console.log(myName);
console.log(yourName);

// When we did yourName = myName it dose'nt give access to original variable it give a copy of that and does'nt provide original value

// but in non-primitive it give access to original reference to original values

let userOne = {
  name: "something",
  email: "someone@google.com",
};

userTwo = userOne;

userTwo.email = "changed@google.com";
console.log(userOne);
console.log(userTwo);
// As we can see in the Output the email from both variables are changed
