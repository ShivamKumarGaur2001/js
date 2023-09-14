# javascript and classes

javascript is a prototype language but ES6 provide class facility

## object oriented programming language

## object 

- collection of properties and methods
- toLowerCase

## why use OOP

## parts of OOP

- **object literal**

```Javascrpit

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

- **constructor function** : new keyowrd used to create new context


```Javascript
    // new keyowrd used to create new context and 
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

```

- prototypes
- classes
- instances

## 4 pillars

Abstraction
Encapsulation
Inheritance
Polymorphism

