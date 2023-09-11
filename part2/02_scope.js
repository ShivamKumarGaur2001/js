// global scope
let a =300
if(true){
    // block scope
    let a=10 // can't be access outside the scope
    const b=20 // can't be access outside the scope
    var c=30 // can be access outside the scope
    console.log(a);
}
//console.log(a);
//console.log(b);
console.log(a);
console.log("scope complete");