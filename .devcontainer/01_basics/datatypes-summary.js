// primitive
// 7 types : String, Number, Boolean, null, underfined,Symbol,BigInt

// Reference (Non primitive)
// Array,Object,Functions there datatype is function object , 

// // array

// const heros = ["shaktiman","naagraj","doga"];

// // Object 
// let myObj = {
//     name : "omkar",
//     age: 22
// }

// // function
//  const myFunction = function(){
//     console.log("hello world");
//  }

// js is dynamically typed language

// const isLoggedIn = false
// const outSideTemp = null
// let userEmail;
// const id = Symbol('123')
// const anotherId = symbol('123')
// console.log(id === anotherId);//not same

// const bigNumber  = 233354354545343

// ########### STACK , HEAP ########
// all premitive DT use STACK
// all non-premitive use heap
// in stack when we refer to original element then we are actually to the copy of the original value so if we make any changes in refrence of  original , then the actuall original is not effected.

// Now for heap, when we refer to OG value then actually we are refering to the oG value so all changes made will effect the OG one 

// let myYoutubename = "om"
// let anothername = myYoutubename
// anothername = "omkar"

// console.log(myYoutubename);
// console.log(anothername);

// let userOne = {
//     email : "user@google.com",
//     upi:"user@ybl"
// }

// let userTwo = userOne

// userTwo.email = "omkar@google.com"

// console.log(userOne.email);
// console.log(userTwo.email);
