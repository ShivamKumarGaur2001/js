// global scope
let a =300
if(true){
    // block scope
    let a=10 // can't be access outside the scope
    const b=20 // can't be access outside the scope
    var c=30 // can be access outside the scope
    console.log(a);
}
console.log(a);
console.log(b);
console.log(a);
console.log("scope complete");

function one(){
    const  userName="shivam"
    
    function two(){                 // closure --> child function can access properties of parent function and vice versa not possible
        const website="youtube"
        console.log(userName);
    }
    console.log(website); // website not defined
    two()
}
one()

 // ++++++++++++++++++++++++++    interesting     ++++++++++++++++++++++++

 console.log(addOne(5)); // no error output shows 6

 function addOne(num){        
    return num+1
 }
 

 console.log(addTwo(5));  // shows error as addTwo not defined yet
 const addTwo = function(num){    // second type of function declaration 
    return num+2
 }
// addTwo(5)
