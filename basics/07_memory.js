// stack(primitive --> callby value) and heap memory(Non-primitive)
let name="shivam";
let anotherName=name;
anotherName="shivam gaur" 
// console.log(name);
// console.log(anotherName);

let userOne ={
    email : "user@gmail.com",
    upi : "user@upi"
}

console.log(userOne.email);

let userTwo = userOne
userTwo.email="shivam.gmail.com"
console.log(userOne.email);  // non - primitve data copied by refernce if change in one reflect in another also