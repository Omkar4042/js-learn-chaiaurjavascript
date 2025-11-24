// for loop 
// first decalar variable , then give condition  
// for (let i = 0; i<=10;i++) {
//     const elemet = i;
//     if (elemet == 5){
//         console.log("5 is best number") 
//     }
//     console.log(elemet);
// }
// output 
// 0
// 1
// 2
// 3
// 4
// 5 is best number
// 5
// 6
// 7
// 8
// 9
// 10

for (let i = 1; i <=10; i++) {
    // console.log(`Outer Loop value: ${i}`);
    for (let j=1; j<=10;j++) {
        // console.log(`inner loop ${j} and outer loop ${i}`)
   // console.log(i + '*' + j + '=' + i * j);
    
}

}
// console.log(`inner loop ${j} and outer loop ${i}`)
// here for 0th outer value all 5 inner valuse are getting printed and same of outer 1,2,3

// console.log(i + '*' + j + '=' + i * j); printing multiplication table

// loops for array 
// the length of array is 3 
// and the index of the array is 2
// let myArray = ["flash","batman","superman","shazam"]
// console.log(myArray.length);
// for (let index = 0;index<myArray.length;index++ ) {
//     const element = myArray[index];
//     console.log(element);
// }


// break and continue
// break 
// for (let index = 1 ; index <= 10;index++){
//     if(index == 5){
//         console.log(`Detected 5`)
//         break
//     }
//     console.log(`value of i is ${index}`)
// }

// continue
for (let index = 1 ; index <= 10;index++){
    if(index == 5){
        console.log(`Detected 5`)
        continue
    }
    console.log(`value of i is ${index}`)
}
here 5 value is skkiped