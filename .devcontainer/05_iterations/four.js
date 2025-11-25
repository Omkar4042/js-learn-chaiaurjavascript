// for in loop, using loop on object

// const myObject = {
//     js:'javascript',
//     cpp:'c++',
//     rb:'rubby',
//     swift:'swift by apple'
// }
// for (const key in myObject) {
//     console.log(key);
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

const programming = ["js","rb","java","cpp"]

for (const key in programming) {
    console.log(programming[key])
}
// if we directely print programming then it will return the array key (array has its key )
Diff in loops

