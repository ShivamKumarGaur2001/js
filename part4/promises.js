//promise  --> the promise object repesents the eventual completion(or failure) of an asynchronous operation and its resulting value
// it complete in future
/*
   Promise is in one of these states:
    pending   :  initial state, neither fulfilled nor rejected.
    fulfilled :  meaning that the operation was completed successfully.
    rejected  :  meaning that the operation failed.
 */

    /*
        New keyword in JavaScript is used to create an instance of an object that has a constructor function. 
        On calling the constructor function with 'new' operator, the following actions are taken: 
        A new empty object is created. 
    */

    const promiseOne = new Promise(function(resolve,reject){
        // do any asyn task such as DB call,cryptography,network
        setTimeout(function(){
            console.log('asyn task is complete');
            resolve()
        },1000)
    }) // give new instance of promise object 

    // consume of promsie --> this connect with resolve
    promiseOne.then(function() {
        console.log('promise consumed');
    })

    new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('asyn task 2');
            resolve()
        },1000)
    }).then(function(){
        console.log("asyn task 2 resolved");
    })


    const promiseThree = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({
                user:"chai",
                email:"chai@example.com"
            })
        },1000)
    })

    promiseThree.then(function(user){
        console.log(user); // {user :"chai", email : 'chai@example.com'}
    })

    const promiseFour = new Promise(function(resolve,reject){
        setTimeout(function(){
            let error=true;
            if(!error){
                resolve({
                    name:"shivam",
                    password: "12345"
                })
            }
            else{
                reject('something went wrong')
            }
        },1000)
    })

    promiseFour.then((user)=>{
        return user.name
    }).then((name)=>{
        console.log(name);
    }).catch(function(error){
        console.log('error');
    }).finally(() => console.log("the promise is either resolved or completed")) // this is called chaining name is return from first then 
    // finally executed always

    const promiseFive =  new Promise(function(resolve,reject){
        setTimeout(function(){
            let error=true;
            if(!error){
                resolve({
                    name:"Javascript",
                    password: "12345"
                })
            }
            else{
                reject('something went wrong with your javascript')
            }
        },1000)
    })
    // another way of consume promise similar to then but catch and try needed
    async function consumePromiseFive(){
        try{
            const response = await promiseFive // wait for the result to come and not move next till it get result
            console.log(response);
        }catch(error){
            console.log("error");
        }
    }
    consumePromiseFive()


    // fetch return promise
    async function getAllUsers(){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data =  await response.json()
            console.log(data);
        } catch (error) {
            console.log("error",error);
        }
    }
    getAllUsers()


    fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log("error");
    })

    /*
        the global fetch() method starts the process of fetching a resource from the network, returning a promise 
        which is fullfilled once the response is available
        reject --> only get when not able to fetch
     */