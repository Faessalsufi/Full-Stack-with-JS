// for of

const fruits = ["apple", "banana", "papaya"];

for (const fruit of fruits) {
  //   console.log(`${fruit}`);
}

const countries = ["India", "Canada", "France", "Japan", "Australia", "Brazil"];

for (const country of countries) {
  //   console.log(`Each character is ${country}`);
}

// Maps
//! Its an object which hold key value pair follow orders

// No duplicates value allowed
const map = new Map();

map.set("IN", "India");
map.set("FR", "France");
map.set("JN", "Japan");
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":", value);
}

// object is not iterable (for of loop)
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "silver",
  fuelType: "gasoline",
  mileage: 15000,
};

// for (const value of car) {
//   console.log(value);
// }
