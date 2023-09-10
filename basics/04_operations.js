// 2**3 --> read as 2 is power 3

let str1="hello"
let str2="shivam"
let str3=str1+str2
// console.log(str3);
// console.log(1+"2"); // 12
// console.log("1"+2); // 12
// console.log("1"+2 +2);  // 122
// console.log(1+2+"2");  // 32
/*
    if string encounter first then whole treat as string
    if number encounter first then number add ups and then treat as string 
*/
// console.log(+true); // convert it to number
// console.log(+""); // convert it to number

let gameCounter=100
gameCounter++;
console.log(gameCounter); // 101
++gameCounter;
/*
    ++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation
*/