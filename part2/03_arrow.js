const user ={
    username:"shivam",
    price:100,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);  // print whole current context or state of the object 
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
console.log(this); //  {} as node global scope and its object is {} whereas browser global object is window

function chai(){
    let userName="shivam"
    //console.log(this); // return lots of information 
    console.log(this.username); // undefined output it means this only used with objects 
}
chai()

const chai= function(){
    let serName="shivam"
    console.log(this.userName); // undefined output
}
chai()

//******************   arrow functions  ************* *//

const chai = () =>{
    let userName="shivam"
    console.log(this); // {}
    console.log(this.userName); // undefined
}
chai()

const addTwo =(num1,num2) =>{
    return num1+num2;
}

const addTwo1 =(num1,num2) => num1 + num2  // implicit return arrow function
const addTwo2 =(num1,num2) => (num1 + num2) // if we use curly braces {} then return keyword is needed not in cases of ()
//to return an object we need () these paranethesis 
const addTwo3=(num1,num2) => ({name:"shivam"})
console.log(addTwo(6,7));



