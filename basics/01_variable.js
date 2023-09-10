const accountId=144553  // constant 
let accountEmail="hello@gmail.com" 
var accountPassword="12345"
let accountState;
/*
    prefer not to use var as scope problem
    if variable defined and not initalised then it is said to be udefined
    {}--> are called scope 
*/
accountCity ="Dehradun"
// accountId=2 // not allowed
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])