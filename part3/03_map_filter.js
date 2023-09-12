const myNums=[1,2,3,4,5,6,7,8,9,10]
// filter use callback function 
// const values= myNums.filter( (num) => num > 4)
// console.log(values);

const values= myNums.filter( (num) => {
    return num >4  // if we don't use return then values array will be empty as above arrow function implicit return happen
})
//console.log(values);

// doing same work using foreach
const newNums=[]
myNums.forEach( (num) =>{
    if(num> 4){
        newNums.push(num);
    }
} )
//console.log(newNums);

/* map function */

const ans=myNums.map( (num) => num+10)
//console.log(ans);

// chaining --> when we use one or more function more than once

const myNumbers= [1,2,3,4,5,6,7,8,9,10]
const newNumbers=myNumbers.map( (num) => num +10).map( (num) => num+1).filter( (num)=> num >20)
// read as first map increase by 10 so we get new array as ->[11,12,13,14,15,16,17,18,19,20] then 
// next map increase value by by one on new map and filter separate the value on given condition

//console.log(newNumbers);// 21




/*    reduce function    */
const sum=myNumbers.reduce( function (acc,currVal){
    console.log(`acc =${acc} and current Value =${currVal}`);
    return acc+currVal
},0) // 0 initial value of accumlator 
console.log(sum);


// using arrow function
const myTotal = myNumbers.reduce( (acc,currVal) =>acc+currVal,0)
console.log(myTotal);

