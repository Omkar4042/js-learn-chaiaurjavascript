// // // truthy valuse means that we asume that the valuse is true , so we are not check any  conditions we directly give the variable name and it is considered to be true 
// // // if the variables value is empty then we consider it as true

// // const userEmail = ""
// // // output
// // // Got user email
// // // const userEmail = ""
// // // output
// // // don't have user email
// // if (userEmail){
// //    // console.log("Got user email");

// // } else {
// //     // console.log("don't have user email")
// // }

// // // falsy values 
// // // false , 0 , -0,BigInt 0n,""(as there is no space/element in it),null,undefined,NaN


// // // truthy valuse
// // // "0",'false'(as its in a string), {},[]," "(as it contains a space),function(){}

// // if  (userEmail.length === 0 ){
// //     // console.log("array is empty")
// // }


// // const emptyObj = {}

// // if (Object.keys(emptyObj).length === 0){
// //     // console.log("object is empty")
// // }
// // // output
// // // object is empty

// // false == 0
// // true
// // false == ""
// // true
// // 0==""
// // true


// // Nullish Coalescing Operator (??) : null underfined

// // an oprator which works when we get null or undefined values as input so then we give default values that will be placed in thoes places 

// // let val1;
// // val1 = 5??10
// // // output 
// // 5
// // //is 5 is first or it came fisrt so it will be the  value

// // val1 = null ?? 10
// // output => 10

//  let val1;

// // val1 = undefined ?? 15
// // output =>  15

// // in this case 10 will be the output as its given first

// // val1 = null ?? 10 ?? 20
// // output =>  10
// // console.log(val1)

// // Terniary  Operator


// // condition ? true: false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


