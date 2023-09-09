
let myDate= new Date();
console.log(myDate);
console.log(myDate.toString());         //Sat Sep 09 2023 10:40:02 GMT+0000
console.log(myDate.toDateString());     //Sat Sep 09 2023
console.log(myDate.toISOString());      // 2023-09-09T10:41:41.317Z
console.log(myDate.toJSON());           //2023-09-09T10:41:41.317Z
console.log(myDate.toLocaleString());  // 9/9/2023, 10:42:46 AM

console.log(typeof myDate);  // object type

let myCreateDate = new Date(2023, 0,23) // in Js months start from 0 
console.log(myCreateDate.toDateString());

let myTimeStamp=Date.now() ; // same as new Date();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());

// to get current date -- > Date.now();
console.log(Math.floor(Date.now()/1000));


let firstDate= new Date();
console.log(firstDate.getMonth() + 1);  // to get month add 1 to get normal month as js use 0 month base indexing
console.log(firstDate.getDay());  // to get day saturday --> 6
console.log(firstDate.getDate());  // to get date 

firstDate.toLocaleString('default',{
    weekday:"long"
})
