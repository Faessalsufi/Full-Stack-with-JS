function sayMyName() {
  console.log("S");
  console.log("u");
  console.log("f");
  console.log("i");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2) {
//   let result = number1 + number2;
//   return result;
// }

function addTwoNumbers(number1, number2) {
  return number1 + number2;
  console.log("Print something"); // this will never execute
}

result = addTwoNumbers(1, 2);
// console.log(result);

// function loginUserMessage(username) {
//   if (username === undefined) {
//     console.log("Please enter a username");
//     return;
//   }
//   return `${username} just logged in`;
// }

// console.log(loginUserMessage("Sufi"));

function loginUserMessage(username = "User ") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage());

// what if we don't know how much arguments will come
// like shopping cart

//...num1 rest operator use case is different

function calculateCartPrice(value1, value2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(300, 600, 900, 300));

const user = {
  username: "Faessal Sufi",
  age: 24,
};

function handleObject(anyObject) {
  return `User name is ${anyObject.username} and age is ${anyObject.age}`;
}
// type safety is required

// console.log(handleObject(user));

// we can also give object directly

// console.log(
//   handleObject({
//     username: "someone",
//     age: 3,
//   })
// );

const myNewArray = [3, 6, 9, 3];

function returnSecondValue(anyArray) {
  return anyArray[1];
}

// console.log(returnSecondValue(myNewArray));

// console.log(returnSecondValue([3, 3, 6, 9])); // we can give give array also
