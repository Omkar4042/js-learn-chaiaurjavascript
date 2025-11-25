// const coding = ["js","ruby","java","python","cpp"] 

// const values = coding.forEach((item)=> { 
//     console.log(item);
//     return item

// })

// console.log(values);
// here undefined is also returned, foreach does not return any  value see why
// js
// ruby
// java
// python
// cpp
// undefined


// ############ // filter  ############ //

// in filter we will get  A  call back function in which we can acces all elements in array but need to give a condition and use witharrow function its good 

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=> num>4)

// const newNums = myNums.filter( (num)=> {
//     return num>4
// })

// console.log(newNums);
// const newNums = myNums.filter( (num)=> {
//     return num>4
// })

// console.log(newNums);

// here we use open a scope then we need to use return keyword

// using for each

// const newNums = []

// myNums.forEach( (num) => {
//     if (num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books = [
    { title: 'Book One', genre:'Fiction',publish:1981,edition:2004 },
    { title: 'Book Two', genre:'Non-Fiction',publish:1992,edition:2008 },
    { title: 'Book Three', genre:'History',publish:1999,edition:2007 },
    { title: 'Book Four', genre:'Non-Fiction',publish:1989,edition:2010 },
    { title: 'Book Five', genre:'science',publish:2009,edition:2014 },
    { title: 'Book Six', genre:'Fiction',publish:1987,edition:2010 },
    { title: 'Book Seven', genre:'History',publish:1986,edition:1996 },
    { title: 'Book Eight', genre:'science',publish:2011,edition:2016 },
    { title: 'Book Nine', genre:'Non-Fiction',publish:1981,edition:1989 },
];

let userBook = books.filter( (i)=>i.genre === 'History')
// redefining the variavle as let is used

userBook = books.filter((bk) => {
    return bk.publish>= 1995 && bk.genre === 'History'
})

console.log(userBook);