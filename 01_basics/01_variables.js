const accountId = 1223;
let accountEmail = "test@gmail.com";
var accountPassword = "123456"
accountCity = "Itanagar";
let accountState; // undefined

// accountId = 2; // const not chanage
accountEmail = "a@test.com";
accountPassword = "0000";
accountCity ="xyz";

console.log('accountId');
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
