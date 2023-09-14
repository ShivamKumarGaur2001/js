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

- **Prototypes**
- **classes**
- **instancce**

## 4 pillars

**Abstraction**
**Encapsulati**n
**Inheritance**
**Polymorphism**

