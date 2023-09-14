function setUsername(username){
    this.username = username // use this of called function
}
function createUser(username,email,password){
    // setUsername(username) --> as function call and execute then pop out from the call stack no username present as not reflected
    setUsername.call(this,username)// to hold the reference 
    this.email=email
    this.password=password
}
const chai =  new createUser("chai","chai.com","12345")
console.log(chai);