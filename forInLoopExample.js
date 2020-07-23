//FOR IN LOOP


/************************************************** */
// Try any part one at a time


// OLD "for" loop
const myArray = { firstName: "Huzaifa", lastName: "Khan", degrees: 1 }

for (let i = 0; i < 3; i++) {
    console.log(myArray[i])
}
// RESULT:
// Undefined
// Undefined
// undefined



/************************************************** */
// New "for in" loop on object values

// const myArray = { firstName: "Huzaifa", lastName: "Khan", degrees: 1 }

// for (i in myArray) {
//     console.log(myArray[i])
// }

//RESULT
// Huzaifa
// Khan
// 1



/************************************************** */
// "For in" loop on Object keys

// const myArray = { firstName: "Huzaifa", lastName: "Khan", degrees: 1 }

// for (i in myArray) {
//     console.log(i)
// }

//RESULT
// firstName
// lastName
// degrees





/************************************************** */
// "For in" loop on array

// const digits = ["a", "b", "c", "d", "e", "f", "g", "h"]


// for ( index in digits) {
//    console.log(digits[index]);
// }
//RESULT
// a
// b
// c
// d
// e
// f
// g
// h
