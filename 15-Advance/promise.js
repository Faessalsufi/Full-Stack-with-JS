const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async part");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promised consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("consumed promise 2");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "javaScript", email: "javascript@tc39.com" });
  }, 1000);
});

promiseThree.then(function (response) {
  console.log(response);
  // console.log(response.username);
  //   console.log(response.email);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Faessal Sufi", password: "123" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});
promiseFour
  .then(function (user) {
    console.log("This is first: ", user.username);
    return user.username;
  })
  .then(function (username) {
    console.log("This is second: ", username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    console.log("The promise either solved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Someone", password: "24" });
    } else {
      reject("Error: User data not exists");
    }
  }, 1000);
});

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiseFive();

// async function getAllUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   console.log(data);
// }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
