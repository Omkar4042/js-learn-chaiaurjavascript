const coding = ["js","ruby","java","python","cpp"]

// call back function, here we just give the don't give the function name we declear it directely

// call back function
// coding.forEach( function (val){
//     console.log(val);
// }) 

// arrow function 
// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
// }
// ) 
// output
// js
// ruby
// java
// python
// cpp
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ever element in an array has the acces to the entire array

const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },

]

// getting value's from a nested object

// myCoding.forEach( (item) => {

//     console.log(item.languageFileName)
// })

// here iteam keyword is imp why 