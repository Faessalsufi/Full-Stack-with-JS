// singleton
// if object made by constructor
//Object.create

// literal
const sym = Symbol("Key1");
const JsUser = {
  name: "Faessal",
  "full name": "Faessal Sufi",
  age: 24,
  [sym]: "sym value",
  location: "Pune",
  email: "someone@google.com",
  isLoggedIn: true,
  lastLoginDays: ["Monday", "Saturday"],
};

// if you want to access the element in object

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]); // can't access this type of keys using .

// console.log(JsUser[sym]);

JsUser.email = "changed@google.com";

// Object.freeze(JsUser); // freeze the object
JsUser.email = "microsoft@google.com";

// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello Js User");
};

console.log(JsUser.greeting());

JsUser.greetingTwo = function () {
  console.log(`Hello ${this["full name"]}`);
};

console.log(JsUser.greetingTwo());

// wwe mostly use . to access the object element we the second [] is also import
