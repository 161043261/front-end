// destruct and set value
let [x, y, z = 3] = [1, 2, 4]
console.log(x, y, z) // 1 2 4

let { _name, age = 0, gender = 0 } = { _name: "Tomcat", gender: 1, age: 22 }
console.log(_name, age, gender) // Tomcat 22 1

function add([x, y]) {
    return x + y;
}

console.log(add([1, 2])) // 3

// constructor
function Counter() {
    console.log("Constructing")
    setTimeout(() => {
        console.log("Constructed");
    }, 3000);
}

let counter = new Counter()

// rest: multiple actual parameters, single formal parameter
let rest = (...args) => {
    console.log(args)
}
rest(1, 2, 3)

// spread: single actual parameters, multiple formal parameter
let spread = (x, y, z) => {
    console.log(x, y, z)
}

let arr1 = [1, 2, 3]
spread(...arr1)

let arr2 = [4, 5, 6]
let arr0 = [...arr1, ...arr2]
console.log(arr0)

let fd1 = { name: "Tomcat" }
let fd2 = { age: 22 }
let fd3 = { gender: "male" }
let obj = { ...fd1, ...fd2, ...fd3 }
console.log(obj)

class Person {
    n // attribute
    age // attribute
    get name() {
        return "name: " + this.n
    }

    set name(n) {
        this.n = n
    }

    static add(x, y) {
        console.log(x + y)
    }

    sub(x, y) {
        console.log(x - y)
    }

    constructor(name, age) {
        this.n = name
        this.age = age
    }
}

let p = new Person("Tomcat", 22)
console.log(p.n)        // Tomcat
console.log(p.name)     // Getter: Tomcat
console.log(p.age)      // 22
Person.add(1, 2) // 3
p.sub(1, 2)      // -1

// extend
class Student extends Person {
    grade

    constructor(name, age, grade) {
        super(name, age)
        this.grade = grade
    }
}

let stu = new Student("Tomcat", 22, 1)
console.log(stu.grade)

// shallow copy
let shallow = stu
++shallow.grade
console.log(stu.grade === shallow.grade) // true

// deep copy
let deep = JSON.parse(JSON.stringify(stu.grade))
++deep.grade
console.log(stu.grade === deep.grade) // false
