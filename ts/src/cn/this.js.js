// this in javascript

console.log("********** PART 1 **********")

function hello(arg) {
    console.log(this.name, "hello", arg);
}

hello.call(/* this= */{name: "Eich"}, "world"); // Eich hello world
hello("world"); // undefined hello world
// browser desugars to hello.call(this=window, "world");

console.log("\n********** PART 2 **********")
let person = {
    name: "Eich", hello: function (arg) {
        console.log(this.name, "hello", arg);
    }
};

person.hello("world"); // Eich hello world
// desugars to person.hello.call(this=person, arg);

console.log("\n********** PART 3 **********")
person = {name: "Eich"}
person.hello = hello;
person.hello("world"); // Eich hello world
// still desugars to person.hello.call(this=person, "world");

console.log("\n********** PART 4 **********")
person = {
    name: "Eich", closure: function () {
        return function (arg) {
            console.log(this.name, 'hello', arg);
        }
    }
};

person.closure()("world"); // undefined hello world
hello = person.closure();
hello("world"); // undefined hello world
// browser desugars to hello.call(this=window, "world");

console.log("\n********** PART 5 **********")
person = {
    name: "Eich", closure: function (arg) {
        return (arg) => { // use arrow function, this == person
            // arrow function captures 'this' (this == person)
            console.log(this.name, 'hello', arg);
        }
    }
};

person.closure()("world"); // Eich hello world
hello = person.closure();
hello("world"); // Eich hello world
