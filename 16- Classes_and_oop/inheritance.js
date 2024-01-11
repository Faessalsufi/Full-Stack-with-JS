class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}
class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`New course is added by${this.username}`);
  }
}

const someTeacher = new Teacher("teacher", "teacher@google.com", "123");

someTeacher.addCourse();

const userTwo = new User("coding");
userTwo.logMe();
someTeacher.logMe();

console.log(someTeacher instanceof Teacher);
console.log(someTeacher instanceof User);
