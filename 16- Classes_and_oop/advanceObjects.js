// console.log(Math.PI);
// Math.PI = 6;
// console.log(Math.PI);

const piDescription = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(piDescription);

//! writable is false

const chai = {
  name: "Ginger chai",
  price: 6,
  isAvailable: true,
  orderChai: function () {
    console.log("Chai nhi bani");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key}:${value}`);
  }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
