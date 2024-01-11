// After ES-6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  logMe() {
    console.log(`The username is ${this.username}`);
  }
  encryptPassword() {
    return `${this.password}1212`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const human = new User("human", "human@world.com", "24");

console.log(human.encryptPassword());
console.log(human.changeUsername());

// behind the sense

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

User.prototype.encryptPassword = function () {
  return `${this.password}1212`;
};

const someone = new User("someone", "someone@somewhere.com", "369");

console.log(someone.changeUsername());
console.log(someone.encryptPassword());
