const accountId = 369369369;
let accountEmail = "something@gmail.com";
var accountPassword = "1221";
let accountState;
accountCity = "Pune";
// accountId = 123;// Not allowed
console.log(accountId);

accountEmail = "changed@gmail.com";
accountPassword = "123";
accountCity = "Mumbai";

// Don't use var to declare a variable because it dose'nt understand block scope and functional scope

console.table([accountEmail, accountPassword, accountCity, accountState]);
// console.log(accountEmail, accountPassword, accountCity);
