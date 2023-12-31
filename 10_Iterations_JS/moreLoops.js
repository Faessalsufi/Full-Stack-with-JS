const person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Engineer",
  city: "New York",
  hobbies: ["reading", "hiking", "coding"],
};

for (const key in person) {
  //   console.log(key, ":", person[key]);
}

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

for (const color in colors) {
  console.log(colors[color]);
}

// We can't use for in loop on map
