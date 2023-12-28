// block scope and global scope

// var varHere = 300; // that's why
let letHere = 300;
// we can access global variable in block scope
if (true) {
  let letHere = 3;
  const constHere = 6;
  //   var varHere = 9;
  //   console.log("Inside block: ", letHere);
}

// console.log(letHere);
// console.log(constHere);

// console.log(varHere); // we can access the variable which was declare inside a variable

// console.log(letHere);

//    nested scope

function one() {
  const username = "Faessal Sufi";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);
  two();
}

// one();

if (true) {
  const username = "Chai aur code";
  if (username) {
    const website = " Youtube";
    console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

// ---------------Interesting-----------------

console.log(addOne(5)); // If we call the normal function before its initialization its also words

function addOne(num) {
  return num + 1;
}

// But if we have a expression or a function which is stored in a variable we can't call it before initialization of the function

// console.log(addTwo(9)); // not allowed

const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(9));
