// use let and const instead of var

// closure
function adder() {
    let sum: number = 0;
    return function (x: number): number {
        sum += x;
        return sum;
    }
}

let pos = adder(), neg = adder()
for (let i = 0; i < 5; i++) {
    console.log(`pos(${i}) = ${pos(i)}`)
    console.log(`neg(${-2 * i}) = ${neg(-2 * i)}`)
}

// Destructuring Assignment
let [m, n]: [number, string] = [22, "Tomcat"];
console.log(m, n); // 22 Tomcat

function swap([first, second]: [number, number]): [number, number] {
    [first, second] = [second, first];
    return [first, second];
}

console.log(swap([1, 2])); // [ 2, 1 ]

let [first, ...rest] = [1, 2, 3];
console.log(first, rest); // 1 [ 2, 3 ]

let {p, q}: { p: number, q: string } = {p: 22, q: "Tomcat"};
console.log(p, q); // 22 Tomcat

let {p: newp, q: newq}: { p: number, q: string } = {p: 22, q: "Tomcat"};
console.log(newp, newq);

let {head, ...passthrough} = {head: "head", x: 1, y: 2};
console.log(head, passthrough); // head { x: 1, y: 2 }

type T = { age: number, name?: string }; // type T = { age: number, name: string | undefined };
function cout({age, name = "cout"}: T) {
    console.log(name, age);
}

function sout({age, name = "sout"} = {age: 0}): void {
    console.log(name, age);
}

cout({age: 22}); // cout 22
sout({age: 22}); // sout 22

let left = [1, 2], right = [3, 4];
let concat = [...left, ...right];
console.log(concat); // [ 1, 2, 3, 4 ]
concat[0]++;
concat[3]--;
console.log(left, right); // [ 1, 2 ] [ 3, 4 ] (shallow copy)

let cat = {
    age: 0,
    meow() {
        console.log("meow");
    }
}
let tomcat = {name: "tomcat", ...cat};
cat.age = 22;
console.log(tomcat); // { name: 'tomcat', age: 0, meow: [Function: meow] } (deep copy)
