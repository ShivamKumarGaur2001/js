//iterations 
//******    for loop  *******/
const array =[1,2,3,4,5,6,7,8]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    //console.log(element);
    // step 1 --> initailize 
    // step 2 --> condition check
    // step 3 --> then loop body excute
    // step 4 --> index update   
}
for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
        const element = array[i]*array[j];
        //console.log(element);        
    }    
}


//******   while loop       ******/
let index=0;
while (index<=5) {
    console.log(index);
    index++;
}

//******   do-while loop   ******/
let condition=3
do {
    console.log(condition);
    condition++
} while (condition<=2); // this loop run once atleast 