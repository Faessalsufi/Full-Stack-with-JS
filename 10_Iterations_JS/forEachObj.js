const peopleData = [
  {
    name: "Alice",
    age: 25,
    city: "Seattle",
    occupation: "Engineer",
    skills: ["JavaScript", "React", "Node.js"],
    isEmployed: true,
  },
  {
    name: "Bob",
    age: 30,
    city: "San Francisco",
    occupation: "Designer",
    skills: ["CSS", "Sketch", "Illustrator"],
    isEmployed: true,
  },
  {
    name: "Charlie",
    age: 22,
    city: "New York",
    occupation: "Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    isEmployed: false,
  },
  {
    name: "David",
    age: 28,
    city: "Los Angeles",
    occupation: "Data Scientist",
    skills: ["Python", "R", "Machine Learning"],
    isEmployed: true,
  },
  {
    name: "Eva",
    age: 35,
    city: "Chicago",
    occupation: "Marketing Manager",
    skills: ["Digital Marketing", "SEO", "Social Media"],
    isEmployed: true,
  },
  {
    name: "Frank",
    age: 32,
    city: "Austin",
    occupation: "Software Engineer",
    skills: ["Java", "Spring", "Hibernate"],
    isEmployed: true,
  },
  {
    name: "Grace",
    age: 26,
    city: "Denver",
    occupation: "UX/UI Designer",
    skills: ["User Research", "Figma", "Adobe XD"],
    isEmployed: true,
  },
  {
    name: "Harry",
    age: 29,
    city: "Portland",
    occupation: "Product Manager",
    skills: ["Agile", "Product Roadmapping", "Market Analysis"],
    isEmployed: true,
  },
  {
    name: "Ivy",
    age: 31,
    city: "Miami",
    occupation: "Frontend Developer",
    skills: ["Vue.js", "Sass", "Webpack"],
    isEmployed: true,
  },
  {
    name: "Jack",
    age: 24,
    city: "Atlanta",
    occupation: "Graphic Designer",
    skills: ["Adobe Creative Suite", "Illustration", "Typography"],
    isEmployed: false,
  },
  {
    name: "Katherine",
    age: 27,
    city: "Phoenix",
    occupation: "Software Developer",
    skills: ["Python", "Django", "PostgreSQL"],
    isEmployed: true,
  },
  {
    name: "Leo",
    age: 33,
    city: "San Diego",
    occupation: "DevOps Engineer",
    skills: ["Docker", "Kubernetes", "Jenkins"],
    isEmployed: true,
  },
];

// peopleData.forEach((item) => {
//   console.log(`Name: ${item.name}`);
//   console.log(`Age: ${item.age}`);
//   console.log(`City: ${item.city}`);
//   console.log(`Job: ${item.occupation}`);
// });

console.log("People with age between 18 and 30");
peopleData.forEach((item) => {
  if (18 < item.age && item.age < 30) {
    console.log(`Name: ${item.name} and Age: ${item.age}`);
  }
});
