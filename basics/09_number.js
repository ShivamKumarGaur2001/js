
const score=400
const balance = new Number(100)
console.log(balance);

console.log(balance.toString()); // to convert number to string
console.log(typeof balance); // object 
console.log(balance.toFixed(2)); //  to take upto two decimal places

const otherNumber=23.8966
console.log(otherNumber.toPrecision(3)); // to round off

const num=1000000
console.log(num.toLocaleString('en-IN')); // to pass argument to convert it to the indian standard.

// Number.MAX_VAlUE 

// +++++++++++++++++++++   MATHS +++++++++++++++++++++++++++++ 

console.log(Math.abs(-49));
console.log(Math.round(4.6)); // round of
console.log(Math.ceil(4.3));
console.log(Math.sqrt(36));
console.log(Math.min(3,4,5,7,1)); // find the minimum value from the array


console.log(Math.random()); // contains value between 0 and 1
console.log((Math.random()*10 )+ 1);
console.log(Math.floor(Math.random()*10 )+ 1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+ min);  // max - min + 1 we add +1 to avoid 0 when max=min
