//**********************    if-else statements     ***************************//

// if(2 == "2"){  // check only value
//     console.log("executed");
// }
// if(2==="2"){  // check both value and data type
//     console.log("executed 1");
// }
// else if(2=="2"){
//     console.log("different data type");
// }
// else{
//     console.log("not equal");
// }

// const userLoggedIn=true;
// const debitCard=true;
// if(userLoggedIn && debitCard){
//     console.log("allow to buy");
// }
// else if(userLoggedIn){
//     console.log("don't have debit card");
// }
// else{
//     console.log("don't log properly");
// }

//***********   switch statement      ***************//
/*
    switch (key){
        case value:
            break;
        default:
            break;
    }
*/
const month =3

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("august");
        break;
    case 9:
        console.log("september");
        break;

    default:
        break;
}

//***********  some predfined values*****************/
/**
     falsy values
     1-> 0,-0,false,null,undefined,"",NaN,BigInt 0n

     true values
     "0","false"," ", [], {}, function(){}
 */

     const myObj={}
     if(Object.keys(myObj).length === 0){
        console.log("empty object");
     }


     // NULLish coalescing opeartor (??) : null undefined
     let val1;
     // val1=5 ??10
     val1= null ?? 10
     console.log(val1); //10

     val2=undefined ?? 15
     console.log(val2); //15

     val3= null ?? 19?? 18
     console.log(val3); // 19 take the first value it get 

     //**   ternary operator ---> condition ? statement1(true) : statement2(false) */
     const price=100;
     price <=10 ?console.log("price less than or equal to 80"):console.log("more than 80");
