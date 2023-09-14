# Javascript and Classes

Javascript is a prototype language(not easily give up try to find element from bottom to up till it gets null value) but ES6 provide class facility

## Object Oriented programming language

## Object 

- Collection of properties and methods
- toLowerCase

## Why use OOP

## Parts of OOP

- **object literal**


```Javascript
        const user = {
        username: "shivam",
        loginCount:88,
        signedIn:true

        getuserDetails : function(){
            console.log(`got user details from database ${this.username}`) // this keyword used for current context
        }
    }
    console.log(user.username)
    console.log(user.getuserDetails())
    

```

- **Constructor function** : new keyword used to create new context


```Javascript
    // new keyword used to create new context and 
    // step 1- > empty object create
    // step 2- > construtor function called
    // step 3 -> this keyword inject values
    // step 4 -> we get the values
    function user(username,logincount,isloggedin){
        this.username=username;
        this.logincount=logincount;
        this.isloggedin=isloggedin;
        return this // return this optional
    }
    const userone =user("shivam",12,true)
    console.log(userone) // { username:"shivam",logincount:12,isloggedin :true}
    const usertwo=user("sonu",10,false)
    console.log(userone) // { username:"sonu",logincount:10,isloggedin :false}  --> values overwrite as they change in the same context

    const userone =new user("shivam",12,true)
    const usertwo=new user("sonu",10,false)

    console.log(userone) // { username:"shivam",logincount:12,isloggedin :true}
    console.log(usertwo) // { username:"sonu",logincount:10,isloggedin :false}

    console.log(userone.construtor) // reference to it self

```

- **Prototypes** : object is the parent of strings ,arrays,function and object parent is NULL.
 
```javascript
    function multiplyBy5(num){
        return num*5
    }
    multiplyBy5.power=2
    console.log(multiplyBy5.power)

    function createUser(username,score){
        this.username=username;
        this.score=score
    }
    // making same method 
    create.prototype.increment = function(){
        this.score++
    }

    const chai = createUser("chai",25)
    const tea  = createUser("tea",250)
    /*

        Here's what happens behind the scenes when the new keyword is used:

        A new object is created: The new keyword initiates the creation of a new JavaScript object.

        A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

        The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

        The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

    */

        // let myName = "hitesh     "
        // let mychannel = "chai     "

        // console.log(myName.trueLength);


        let myHeros = ["thor", "spiderman"]


        let heroPower = {
            thor: "hammer",
            spiderman: "sling",

            getSpiderPower: function(){
                console.log(`Spidy power is ${this.spiderman}`);
            }
        }
        // inject the hitesh function of oject prototypes and now it can be accessible by all the object as well as its child such as arrays,strings 
        Object.prototype.hitesh = function(){
            console.log(`hitesh is present in all objects`);
        }

        Array.prototype.heyHitesh = function(){
            console.log(`Hitesh says hello`);
        }

        // heroPower.hitesh()  --> available
        // myHeros.hitesh() --> available
        // myHeros.heyHitesh() --> available
        // heroPower.heyHitesh()  --> not available as it moves from children to parent
```

- **classes**
- **instancce**

## 4 pillars

- **Abstraction**
- **Encapsulati**
- **Inheritance**

```Javascript
        const User = {
            name: "chai",
            email: "chai@google.com"
        }

        const Teacher = {
            makeVideo: true
        }

        const TeachingSupport = {
            isAvailable: false
        }

        const TASupport = {
            makeAssignment: 'JS assignment',
            fullTime: true,
            __proto__: TeachingSupport // two underscore and TAsupport can access the property of teaching support
        }
        Teacher.__proto__ = User // teacher can access all the properties of the user

        // modern syntax

        Object.setPrototypeOf(TeachingSupport, Teacher)//Teacher support can access the property of teacher


        // to inject new function truelength
        let anotherUsername = "ChaiAurCode     "

        String.prototype.trueLength = function(){
            console.log(`${this}`); // name of the string or who invoke it
            console.log(`True length is: ${this.trim().length}`);
        }

        anotherUsername.trueLength() // 11
        "hitesh".trueLength() //6
        "iceTea".trueLength() //6
```

- **Polymorphism**

