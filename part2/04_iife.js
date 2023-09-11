// Immediately Invoked Function Expressions (IIFE)
//needed as we don't want problem from the global scope pollution as these properties of global available to all so we make our own scope


//**********  syntax of IIFE function  *********/
(function chai(){
    // named IIFE
    console.log("db connected");
})(); // to stop its context ;  needed

// (function definiton )() --> IIFE

( (name) =>{console.log(`db connected 2 by ${name}`);})("shivam");