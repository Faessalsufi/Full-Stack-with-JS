function multiplyByFive(num) {
  return num * 5;
}

multiplyByFive.power = 3;

console.log(multiplyByFive(6));
console.log(multiplyByFive.power);
console.log(multiplyByFive.prototype);

function createUser(username, price) {
  this.username = username;
  this.price = price;
}

createUser.prototype.increasePrice = function () {
  console.log(`The price of ${this.username} is ${this.price}`);
};
const chai = new createUser("Chai", 24);
const tea = new createUser("Tea", 12);

chai.increasePrice();
tea.increasePrice();
