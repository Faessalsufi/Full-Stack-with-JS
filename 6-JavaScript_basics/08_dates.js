const myDate = new Date();
// 1 January 1970 starting time

// console.log(typeof myDate); // object

// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// let myCreatedDate = new Date(2002, 10, 24, 6, 3); // month starts from 0 to 11

let myCreatedDate = new Date("11-24-2023");
console.log(
  myCreatedDate.toLocaleString("default", {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
  })
);

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000)); // converted into seconds

let newDate = new Date();
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);

newDate.toLocaleString("default", {
  weekday: "long",
});
