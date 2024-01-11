// let myName = "Sufi     "

// console.log(myName.trueLength());

String.prototype.trueLength = function () {
  console.log(`The true length of ${this.trim().length}`);
};

let someVariable = "Google    ";
someVariable.trueLength();

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spider power is ${this.spiderman}`);
  },
};

Object.prototype.sayName = function () {
  console.log(`I'm present in all objects`);
};

Array.prototype.sayArray = function () {
  console.log(`array is present`);
};

myHeros.sayName();
myHeros.sayArray();
// heroPower.sayArray(); // not for objects
heroPower.sayName();

// inherit

const User = {
  username: "someone",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fulltime: true,
  __proto__: TeachingSupport, // old first syntax
};

Teacher.__proto__ = User; // we can define outside also

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);
