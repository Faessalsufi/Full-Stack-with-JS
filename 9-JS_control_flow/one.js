// if

const temperature = 24;

// if (temperature < 20) {
//   console.log(`executed`);
// } else {
//   console.log(`else is executed`);
// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 300;
// if (score > 100) {
//   const power = "Fly";
//   console.log(`User power : ${power}`);
// }

//   const power = "Fly"; //! block level scope can't access it

// const balance = 900;
// if (balance > 600) console.log(`Balance is more than 600`); //! implicit scope we can write multi line scope with adding a , comma but that is not recommended

// if (balance < 300) {
//   console.log("Less than 300");
// } else if (balance < 600) {
//   console.log("Less than 600");
// } else if (balance < 900) {
//   console.log("Less than 900");
// } else if (balance <= 1000) {
//   console.log("Less than 1000");
// } else {
//   console.log("balance is greater than 1000 ");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromEmail = true;
const loggedInFromGoogle = false;
//! And condition

if (userLoggedIn && debitCard) {
  console.log("Allowed to buy course");
}

//! OR condition
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
