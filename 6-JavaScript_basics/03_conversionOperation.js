let score = "abc";

// console.log(typeof score);

numberScore = Number(score);
// console.log(typeof numberScore);
// console.log(numberScore);

// "24" => 24
// "24abc"=> NaN
// true => 1; false => 0

let isLoggedIn = null;
let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

//  1=> true; 0=> false
// "" => false
// "something" => true

let someNumber = 24;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

/*
multiline comment
*/

// Operations

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+4);
// console.log(2-4);
// console.log(2*4);
// console.log(2**4);
// console.log(2/4);

// console.log(2%4); // we use this sometimes

let str1 = "Hello";
let str2 = " Sufi";
let str3 = str1 + str2;

// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(1 + "2" + 2 + 2);

// console.log(((2 + 4) * 3) / 6);

console.log(+true); // we should not do this
console.log(+""); // not recommended

let num1, num2, num3;

num1 = num2 = num3 = 2 + 4;

let gameCounter = 60;
gameCounter++; // postfix
++gameCounter; // prefix
console.log(gameCounter);
