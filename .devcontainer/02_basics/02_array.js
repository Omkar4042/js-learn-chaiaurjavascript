// bash: !!: event not found, what is event here

const marvel_heros = ["thor","ironman","spiderman"]

const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// here when we push an array in another array then it add the other array , the elements of other or 2nd array are not directled added but that array is fulled taken in , meaning an array in another array , as array is able to store elements of multiple DT, .push add too add it does not mearge it.
// console.log(marvel_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allheros = marvel_heros.concat(dc_heros)

// console.log(allheros)

const all_new_heros = [...marvel_heros, ...dc_heros]
// this is spread method ... , it also gives individual elements 
// 

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"})) // IV question

let socre1 = 100
let socre2 = 200
let socre3 = 300

console.log(Array.of(socre1,socre2,socre3));