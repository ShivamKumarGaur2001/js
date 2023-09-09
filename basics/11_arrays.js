const myArr=[0,1,2,3,4,5] // arrays are resizeable and contain different datatypes elements
                          // array do shallow copies

console.log(myArr[0]);

const myArr2= new Array(1,2,3,3)

myArr.push(6);
myArr.push(7)
myArr.pop() // last value remove 
console.log(myArr);
console.log(typeof myArr);  // object 

myArr.unshift(9);  // insert elem at start and shift all the values by one place and take lots of time if the size of the 
                  //  array is very large
console.log(myArr);
myArr.shift();
console.log(myArr);
myArr.shift();
console.log(myArr); // remove the first element 

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(19)); // if element not present return -1

const newArr =myArr.join() // join elements and make them string by joining 
console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
console.log(newArr); // 0,1,2,3,4,5
console.log(typeof newArr); // string 


console.log("A", myArr);

const myn1=myArr.slice(1,3)  // last index not include 
console.log(myn1); // [1,2]
console.log("B",myArr); // B [ 0, 1, 2, 3, 4, 5 ]

const myn2=myArr.splice(1,3)  // last index include
console.log(myn2); // [1,2,3]
console.log("C",myArr); // C [ 0, 4, 5 ] --> splice remove the subarray from the array

const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros); // array not merge result -->[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3]);  // [ 'superman', 'flash', 'batman' ]
console.log(marvel_heros[3][2]); // batman

const totalHeros= marvel_heros.concat(dc_heros);
console.log(totalHeros); // result is concat of both arrays
console.log(marvel_heros);  // no concat reflect in the marvel_heros array

const all_new_heros =[...marvel_heros,...dc_heros] // ... is spread which spread as indiviual elements
console.log(all_new_heros); // all the concatination

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(another_array);
const real_another_array=another_array.flat(Infinity); // make all elements into single array and arguments take depth of arrays
console.log(real_another_array);

console.log(Array.isArray("shivam"))
console.log(Array.from("shivam")) // convert it to the array --> ['s','h','i','v','a','m']
console.log(Array.from({name:"shivam"})); // interesting

let n1=100
let n2=200
let n3=300
console.log(Array.of(n1,n2,n3));

