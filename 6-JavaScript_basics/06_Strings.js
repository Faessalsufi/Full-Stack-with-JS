const name = "Faessal Sufi";

const repoCount = 24;

// console.log("My name is " + name + " and my repo count is " + repoCount);

// console.log(`My name is ${name} and my repo count is ${repoCount}`);

// This gives exactly same output but the readability of the code increased.

const gameName = new String("Faessal-Sufi-dot-com");

// console.log(gameName.length);
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf("S"));
const newString = gameName.substring(0, 6); // 6 will not be included
// can't give negative values in substring
// negative value converted into 0
// console.log(newString);

const anotherString = gameName.slice(0, -3);
// Can give negative values
// console.log(anotherString);

const spaceString = "   Sufi   ";

// console.log(spaceString.trim()); // will remove starting and ending spaces and newlines

const url = "https://www.google.com/faessal%20sufi";

// console.log(url.replace("%20", "-"));
// console.log(url.includes("sufi"));
// console.log(url.includes("something"));

// String to Array

// Split

console.log(gameName.split("-"));
