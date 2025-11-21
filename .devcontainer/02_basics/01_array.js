// // array is a datatype in which we can store elements of multiple datayppes 
// // js array are resizable , can changle later ,
// // for indexing in js we use index number not element it self 
// // copys in array make shallow copy , shallow copy refer to same og object whereas Deep copy do not refer to same og object , ? then where
const myArr = [0,1,2,3,4,5]

// const myHeros = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr);

// // array methods 

// myArr.push(6)
// myArr.push(7)
// myArr.pop(),// pop last element 
// myArr.unshift(9), // add elemnt at start
// myArr.shift() // remove the last element 

// console.log(myArr)

// console.log(myArr.includes(9))

// console.log(myArr.indexOf(3))

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)// .join methods converst the arr in a string

console.log("A",myArr)

const myn1 = myArr.slice(1,3)
//. slice does not add the last value in range  , it does not change the original array
console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.splice(1,3)
//. splice add's the last value in range also , it changes the original array
console.log(myn2)
console.log("C",myArr)

