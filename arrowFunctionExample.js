// ARROW FUNCTIONS


/************************************************** */
// Try any part one at a time

// Normal function declaration
// function myFunction(text) {
//     let name = "Welcome " + text
//     return name
// }

// let msg = myFunction("Huzaifa Khan")
// console.log(msg)  


/************************************************** */

// Function expression
// const myFunction = function (text) {
//     let name = "Welcome " + text
//     return name
// }

// let msg = myFunction("Huzaifa")
// console.log(msg)  

/************************************************** */

// Arrow function
// const myFunction = (text) => {
//     let name = "Welcome " + text
//     return name
// }
// let msg = myFunction("Huzaifa")
// console.log(msg)  

/************************************************** */

// Arrow function
// const myFunction = text => "Welcome " + text

// let msg = myFunction("Huzaifa")
// console.log(msg)  

/************************************************** */

// Arrow function
const myFunction = (fname,lname) => `Welcome ${fname} ${lname}`

let msg = myFunction("Huzaifa","Nadir")
console.log(msg) 