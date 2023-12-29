// Immediately Invoked Function Expression (IIFE)

// to immediately execute the function we use IIFE

(function checking() {
  // named IIFE
  console.log(`DB connected`);
})();

// with arrow function
((name) => {
  console.log(`DB connected 2 ${name}`);
})("Someone");

// same as normal function

checking("Someone");
