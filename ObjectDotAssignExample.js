// Object.assign

/************************************************** */
// Try any part one at a time

let obj1 = { fname: "Huzaifa" }
let obj2 = { lname: "Khan" }

let newObj = Object.assign({}, obj1, obj2)

console.log("obj1", obj1)       //RESULT: obj1 {fname: "Huzaifa"}
console.log("obj2", obj2)       //RESULT: obj2 {lname: "Khan"}
console.log("newObj", newObj)   //RESULT: newObj {fname: "Huzaifa", lname: "Khan"}



/************************************************** */


// let obj1 = {
//     fname: "Asad",
//     lname: "Zaidi",
//     degrees: 1,
// }
// let obj2 = {
//     city: "Karachi",
//     country: "Pakistan",
//     gender: "male",
// }
// let obj3 = {
//     fname: "Huzaifa",
//     lname: "Khan",
// }

// // first argument is target object and rest are sources
// let newObject = Object.assign(obj1, obj2, obj3)
// console.log("obj1", obj1)
// console.log("obj2", obj2)
// console.log("obj3", obj3)
// console.log("newObject", newObject)
