// SINGLETON 
// object.create (constructor method)

//  object literals
const mySym = Symbol("myKey1")

const JsUser = {
    name:"hitesh",
    "full name":"hitesh chourhary",
    [mySym]:"myKey1",
    age:18,
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])// to acces with [] we need to dicreal key in string 
// console.log(JsUser["full name"]) // if we try to acces the full name which is been diclered in string for that we will need to use [] as directly we are  not able to , check why
// console.log( JsUser[mySym])// if we create a symbole we need to put it in [] in a object and even when we print it , check why

JsUser.email = "hitesh@chatgpt.in"
// changing values
// Object.freeze(JsUser) // here we are frezing the object so after this we cannot make any changes in it
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
console.log("Hello JS User  ")
}

JsUser.greetingTwo = function(){
console.log(`Hello JS User, ${this.name} `)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
