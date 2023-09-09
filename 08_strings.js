const name="shivam-kumar"
const repoCount =50
// console.log(name + repoCount + "Value") 

// new way to use back-tic(``) -> key above tab and use ${name_of_variable}  --> string interpolation
// console.log(`Hello my name is ${name} and have repo count = ${repoCount}`)

const gameName = new String('Hitesh-hc')  // object type which give us many function
// console.log(typeof gameName)
// // it is an object we can access element using key
// console.log(gameName[0]);  // H

// console.log(gameName.length); // to find the length
// console.log(gameName.toUpperCase() );  // to convert it to the upper case

console.log(gameName.charAt(2));  // to find the char at any index 
console.log(gameName.indexOf('e')); // to find the index of ant character

const newString = gameName.substring(0,4);  // last index-4 not include and substring doesn't obey it
const anotherString =gameName.slice(-8,4) // can provide negative value in slice 
console.log(newString);
console.log(anotherString);

