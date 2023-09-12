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
    //console.log(index);
    index++;
}

//******   do-while loop   ******/
let condition=3
do {
    //console.log(condition);
    condition++
} while (condition<=2); // this loop run once atleast 


/********** for of loop  ************/
for (const num of array) {
    //console.log("num->",num);
}

const greetings="Hello world"
for (const char of greetings) {
    //console.log(`each char is ${char}`);
}



/*  ******** Map ******** */
const map = new Map();
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
//console.log(map);


for (const [key,value] of map) {
    //console.log(key,':-',value);
}

const myObj={
    'game1':"NFS",
    'game2':"spiderman",
    'game3':"cricket"
}
// for (const [key,value] of myObj) {
//     // console.log(key,':-',value); // my object is not iterable so we can't iterate using for of loop
// }  



/*****  forin loop to iterate in the object ********/

for (const key in myObj) {
    //console.log(`the key and value pair are ${key} --> ${myObj[key]}`);
}

const programming =["js","c++","python","ruby","java","c"]
for (const key in programming) {
    //console.log(key); // 0 1 2 3 4 5 --> value of the index
    //console.log(programming[key]);
}
// forin loop can't be used for map



/*    foreach loop     */
const coding =["js","c++","python","ruby","java","c"] 
// use callback function so don't have name
// coding.forEach( function (item ){
//     console.log(item);
// } )

// using arrow function
// coding.forEach( (num) =>{
//     console.log(num);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })


const myCoding =[
    {
        languageName :" javascript",
        languageFile :" js"
    },
    {
        languageName :" c++",
        languageFile :" cpp"
    },
    {
        languageName :" python",
        languageFile :" py"
    }
]

// myCoding.forEach( (obj) =>{
//     console.log(obj.languageName);
//     console.log(obj.languageFile);
// })

const values= coding.forEach( (item) => {
    return item
})

// console.log(values); // output is undefined as foreach don't return any values

