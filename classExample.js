// CLASS

class msg {
    static flag = "Pakistan"

    constructor(name1, name2) {
        this.flag = false
        this.fname = name1
        this.lname = name2
    }

    printMsg() {
        console.log(`Welcome ${this.fname} ${this.lname} ${this.flag}`)
        this.flag = true
        console.log(`Welcome ${this.fname} ${this.lname} ${this.flag}`)
    }
}

let person1 = new msg("Huzaifa", "Khan")
let person2 = new msg("Usama", "Sohail")
let person3 = new msg("Asad", "Zaidi")

person1.printMsg()
person2.printMsg()
person3.printMsg();

console.log(msg.flag, person1.flag)
console.log(msg.fname, msg.lname)

msg.fname = "Qassim"
console.log(msg.fname, person2.fname)

