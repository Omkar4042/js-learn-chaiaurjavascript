// // Array specific loops 

// // for of 
// // here element is i  refrenece variable, and object is the variable diclered on whome we wil iterate

// // const arr = [1,2,3,4,5,]
// //  for (const num of arr) {
// //     console.log(num);
    
// //  }

// const greetings = ["Hello World"]
//  for (const greet of greetings) {
//     console.log(greet);   
//  }

// // Maps , it has unique values of key value pair, no duplicate

const map = new Map()
map.set('IN','India')
map.set('USA','United State of America') 
map.set('Fr','France') 
map.set('IN','India')

// console.log(map);
// output => 
//    Map(3) {
//   'IN' => 'India',
//   'USA' => 'United State of America',
//   'Fr' => 'France'
// } here India is not printed twice as in map only unique  data is allowed

// map is not iteratible

// insted of i we can write key for clearity  , if we only use i or key just a refrenece to the variable them only the keys in the given array will be printed so to get value we must use value word 
for (const [i,values] of map) {
    console.log(i,':-',values);
}

// for of loop on object
// we directely cannot use for of loop on object can do it diferently