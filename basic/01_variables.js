const accountId =234567;
let accountEmail = "devdhami765@gmail.com";
var accountPassword ="1234"; //old method
accountCity = "Khitima";

// accountId=5; not allowed
accountEmail = "temp@124.com"
accountPassword = "1234567897"
accountCity = "Bengaluru"
/*
Prefer ot to use var 
because of issue in block scope and functional scope
 */


console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])