function setUserName(username) {
  // complex calculations
  this.username = username;
}

function createUser(username, email, password) {
  setUserName.call(this, username);
  this.email = email;
  this.password = password;
}

const userOne = new createUser("Coffee", "coffee@example.com", "123");
console.log(userOne);
