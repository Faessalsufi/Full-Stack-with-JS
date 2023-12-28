// const tinderUser = new Object() //singleton but they are same as literal

const facebookUser = {};

facebookUser.id = "123abc";
facebookUser.name = "123abc";
facebookUser.isLoggedIn = true;

regularUser = {
  email: "someone@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Faessal",
      lastName: "Sufi",
    },
  },
};

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const resultObj = { obj1, obj2 };
// const resultObj = Object.assign(obj1, obj2); //the first obj that is obj1 in this case it is teated as target and source so it will put all source into target that why we give empty obj first

// const resultObj = Object.assign({}, obj1, obj2); // in this case no object will be modified

// or the best spread operator
const resultObj = { ...obj1, ...obj2 };

// console.log(resultObj);
// console.log(obj1);

const users = [
  {
    id: 1,
    email: "SOme@gmail.com",
  },
  {
    id: 1,
    email: "SOme@gmail.com",
  },
  {
    id: 1,
    email: "SOme@gmail.com",
  },
];

// console.log(users[1].email);

// console.log(facebookUser);

objArr = Object.keys(facebookUser);
// console.log(typeof objArr);

// console.log(Object.keys(facebookUser)); // very Imp
// console.log(Object.values(facebookUser));

// console.log(typeof Object.keys(facebookUser)); // very Imp

// console.log(Object.entries(facebookUser));

// console.log(facebookUser.hasOwnProperty("isLoggedIn"));

const course = {
  courseName: "Javascript",
  price: "369",
  courseMentor: "Faessal Sufi",
};

// console.log(course.courseMentor);

// destructure object

const { courseMentor: CM } = course;
// CM is like As

console.log(CM);

// JSON

// {
//   "courseName": "Javascript",
//   "price": "369",
//   "courseMentor": "Faessal Sufi",
// }

// sometimes we get api in array format also

[{}, {}, {}];

const { id } = facebookUser;

console.log(id);

// const { objElement : shortForm } = objName;
