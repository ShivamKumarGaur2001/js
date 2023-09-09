/*
jS is a dynamically typed language because data type will automatically assigned at the 
time of compilation or code execution.


primitive data types
   7 types --> string ,number,boolean,null,undefined,symbol,BigInt

Reference/ non -primitive
    arrays,objects,functions
 */

const id=Symbol('123')     // symbol
const anotherId=Symbol('123')
console.log(id == anotherId);
const heros =["shaktiman,","naagraj","doga"] //  arrays
let myObj={             // object
    name:"shivam",
    age : 22
}

const fisrtFunction = function(){
    console.log(fisrtFunction);
}
