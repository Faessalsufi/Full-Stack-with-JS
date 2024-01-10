const user = {
  username: "Sufi",
  loginCount: 6,
  signedIn: true,
  getUserDetails: function () {
    // console.log("Got user details from DB");
    console.log(`Username: ${this.username}`);
  },
};

// console.log(this); // empty for node and window for browser

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`Welcome${this.username}`);
  };
  return this;
}

const userOne = new User("Sufi", 12, true);
const userTwo = new User("Changed", 6, false);
console.log(userOne);
console.log(userTwo);
