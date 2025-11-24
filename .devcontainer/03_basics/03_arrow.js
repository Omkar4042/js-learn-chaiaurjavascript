//  this refers to the current context , in context in a ScriptProcessorNode

//  what output do we get when we print this , in a node environment w'll get empty but its different in browser serach 

const user = {
    username : "Omkar",
    price:999,

    welcomeMessage : function(){
        console.log(`${this.welcome},welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()// this welcomeMessage is a method so we  need to call it with a () why.
// user.username  = "sam"
// user.welcomeMessage() // now we have change the current value so the method will run for the new one

// console.log(this);
// this can be use only in a object not in a function
// function chai(){
//     // let username = "omkar"
//     console.log(this.username)
// }
// chai()
// output
// {}
// undefined

// we can you this in arrow function but it will give a empty {} output \


// ############# arrow function #############
// arrow function is a function that can be decleared without function keybord , => the arrow String

// basic arrow function 
// const addTwo = (num1,num2)=> {
//     return num1 + num2
// }
// console.log(addTwo(3,5))

// impliced return here we do not need to use {} and return keyword  , but if we use {}then we will have to use return keyword , why , 
const addTwo = (num1,num2)=>  (num1+num2)

// for object in implicit return we declare them in {} and rap them in () braces
// const addTwo = (num1,num2)=>  ({username:"Omkar"})

// console.log(addTwo(3,5))







