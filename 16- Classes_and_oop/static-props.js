class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`username is ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const sufi = new User("Sufi");
// console.log(sufi.createId()); //! will not be accessible because of static

class teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const laptop = new teacher("dell", "dell@");

laptop.logMe();
// laptop.createId(); //! also for this
