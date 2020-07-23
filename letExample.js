// LET

// Excellent article on LET, CONST, Variable
// https://andy-carter.com/blog/variable-scope-in-modern-javascript

/************************************************** */
// Try any part one at a time

var x = 10;
console.log(x)       // Result: 10
{
    let x = 2;
    console.log(x)   // Result: 2
}
console.log(x)       // Result: 10


/************************************************** */

// let myname = "Huzaifa"

// console.log(myname)  //Result: Huzaifa

// function getName() {
//     let myname = "Khan"
//     console.log(myname) //Result: Khan
// }

// getName()

// console.log(myname)  //Result: Huzaifa



/************************************************** */




// let myname          // Declare variable
// myname = 'Huzaifa';   // Initialize variable
// console.log(myname) // result: Huzaifa



/************************************************** */

// let myname          // Declare variable
// console.log(myname) // result: Undefined
// myname = 'Huzaifa';   // Initialize variable



/************************************************** */


// myname = 'Huzaifa';   // Initialize variable
// console.log(myname) // result: ERROR: myname is not defined
// let myname          // Declare variable



/************************************************** */

// myname = 'Huzaifa';   // Initialize variable
// let myname          // Declare variable
// console.log(myname)// result: ERROR: myname is not defined

