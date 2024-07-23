// window.alert()   Warning box 
// document.write() Write to html document
// innerHTML        Write to html element
// console.log      Write to browser console

// const, let, var
let v = 3.1415 // number
v = false              // boolean
v = "Tomcat"           // string
v = [3, 1, 4, 1, 5]    // object (array)
v = {                  // object (container)
    name: "Tomcat", age: 22, toString: function () {
        return this.name + " " + this.age
    }
    // toString() {
    //     return this.name + " " + this.age
    // }
}

console.log(v.name + " " + v["age"]) // Tomcat 22
console.log(v.toString())            // Tomcat 22

let str = String(v.name)
console.log(str[4], str.length)      // c 9

let num = Number(true)
console.log(num)                     // 1

let b = Boolean(0)
console.log(b)                       // false

let arr = Array(3)
console.log(arr.length)              // 3

arr = Array(3, 1, 4, 1, 5)
console.log(arr)                     // [ 3, 1, 4, 1, 5 ]

let date = new Date().getDay()
let exp
switch (date) {
    case 6:
    case 0:
        exp = "weekday"
        break
    default:
        exp = "workday"
}
console.log(exp) // workday

// for loop
for (let i in arr) {
    console.log(i)
}

function isArray(arr) {
    str = arr.constructor.toString()
    console.log(str) // function Array() { [native code] }
    return str.indexOf("Array") > -1
}

console.log(isArray(arr)) // true

// type convert: number <-> string
console.log(typeof String(123))      // number -> string
console.log(typeof (123).toString()) // number -> string
console.log(typeof parseInt("123")); // string -> number

function handler(v) {
    try {
        if (v == null || isNaN(v)) {
            throw Error("Invalid v")
        }
        v = Number(v);
        console.log(v)
    } catch (e) {
        console.log(e.message)
    } finally {
        console.log("exit")
    }
}

handler("Susan") // Invalid v exit

let person = {} // equals to: new Object()
person.name = "Tomcat" // add attribute
person["age"] = 22
person.toString = function () {
    return this.name + " " + this.age
}
console.log(person.toString()) // Tomcat 22

let notation = '{"name":"Jerry","age":21}'
let obj = JSON.parse(notation)
console.log(obj) // { name: 'Jerry', age: 21 }

obj.name = "Tom"
obj["age"] = 22
notation = JSON.stringify(obj)
console.log(notation) // {"name":"Tom","age":22}
