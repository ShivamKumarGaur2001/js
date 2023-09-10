// function sayMyName(){
//     console.log("hello this is my first fucntion");
// }

// function calling 
// sayMyName(); // if we just write sayMyName then it is refernce to the place where this function reside

function addTwoNumbers(num1,num2){
    //console.log(num1+num2);
    let result=num1+num2;
    return result 
}
const result = addTwoNumbers(2,3)  // when function called are known as arguments and when function is define it called parameters
//console.log("result --->",result);

function loginUserMessage(userName){
    if(userName === undefined){
        // undefined treated as false
        console.log("Please enter a username");
        return 
    }
    return `${userName} just logged in`
}
//console.log(loginUserMessage());

function calculateCartPrice(num){
    return num
}
console.log(calculateCartPrice(3));  // 3

// function calculateCartPrice(num){
//     return num
// }
// console.log(calculateCartPrice(3,4,5,));  // 3

// function calculateCartPrice(...num){  // here it called  ... rest operator
//     return num
// }
// console.log(calculateCartPrice(3,4,5,6)); //[3,4,5,6]

// function calculateCartPrice(val1,val2,...num){  // here it called  ... rest operator
//     return num
// }
// console.log(calculateCartPrice(3,4,5,6)); //num1=[5,6] and val1=1 and val2=2


const user={
    name:"shivam",
    price:100
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
}
handleObject(user)
handleObject({
    name:"skg",
    price:800
}) 

