const user = {
  username: "Sufi",
  age: 24,

  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to website`);
    console.log(this);
  },
};

// current context / object - this.

// user.welcomeMessage();
// user.username = "someone";
// user.welcomeMessage();

// console.log(this); // empty object for node and if do this in browser there is window global object

// function myFunction() {
//   let username = "somebody";
//   console.log(this.username); // can't use this in a function
// }

// myFunction();

// const coffee = function () {
//   let username = "somebody";
//   console.log(this.username);
// };

function myFunction() {
  let username = "somebody";
  console.log("I am a Normal function", typeof this); // this will give some values in object
}
// myFunction();

const coffee = () => {
  let username = "somebody";
  console.log("I am an Arrow function ", typeof this); // this will give empty object
};
// coffee();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// implicit return

// const addTwo = (num1, num2) => num1 + num2;
// If we use {} then we have to write return if not than we can use without return keyword

// If we want to return an object then we can use () to wrap object
const addTwo = (num1, num2) => ({
  username: "sufi",
});

console.log(addTwo(3, 3));
