// singleton when costruct using construtor  --> Object.create
 
// object literals

const mySym= Symbol("key1") // to use symbol as key for object
const jsUser ={
    name:"shivam",
    "fullName":"shivam Kumar",
    [mySym]:"myKey1", // if we use mySym:"myKey1" --> mySym type will be string not symbol
    age:18,
    location:"delhi",
    email:"hello.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(jsUser.name);
// console.log(jsUser["name"]);
// // when above mention method use to access full name as dot operator not used
// console.log(jsUser["fullName"]);

// console.log(jsUser[mySym]);

// // of you don't want anyone can change the value of the key of the object then use freeze
// Object.freeze(jsUser);
// jsUser.name="shiv"
// console.log(jsUser.name); // shivam no changes reflected
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello user");
}
jsUser.greetingtwo=function(){
    console.log(`hello user from ${this.fullName}`); // this refers to the current object and this. provides the properties of all the object
}
// console.log(jsUser.greeting); // return [function(anonymous)]
// console.log(jsUser.greeting());
// console.log(jsUser.greetingtwo())

// *********** singleton objects *********
const tinderUser = new Object();  // singleton object
const tinderUser1={}  //--> non-singleton object
console.log(tinderUser); // {}

tinderUser.id="123abc"
tinderUser.name="shiva"
tinderUser.isLoggedIn=false;
// console.log(tinderUser);

const regularUser ={
    email : "hello.com",
    fullname:{
        userName: {
            firstName:"shivam",
            lastName :"Kumar"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname.userName.firstName); // shivam
// console.log(regularUser.fullname?.userName.firstName); // fullname? --> use if full name exist useful  when we use api

const obj1={ 1: "a" , 2: "b"}
const obj2={ 3: "a" , 4: "b"}
const obj3 ={obj1,obj2}
// console.log(obj3); //{ obj1:{ 1: "a" , 2: "b"},obj2={ 3: "a" , 4: "b"}}

// // to combine two objects
// const obj4= Object.assign(obj1,obj2); // for better practice use Object.assign({},obj1,obj2); {} -->target array otherwise
// // all values append first object which pass as first arguement
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// // using spread opeartor 
// const obj5 ={...obj1,...obj2}
// console.log(obj5); // output same as obj4

console.log(Object.keys(tinderUser)); // to get all the keys of the tinder object in the array format
console.log(Object.values(tinderUser)); // to get all the values of the tinder object in the array format
console.log(Object.entries(tinderUser)); // return array where each element also array  as key and value pair

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true