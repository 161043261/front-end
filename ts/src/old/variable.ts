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
let {p, q}: { p: number, q: string } = {p: 22, q: "Tomcat"};
console.log(p, q); // 22 Tomcat

let [first, ...rest] = [1, 2, 3];
console.log(first, rest); // 1 [ 2, 3 ]

let {head, ...passthrough} = {head: "head", x: 1, y: 2};
console.log(head, passthrough); // head { x: 1, y: 2 }

type T = { msg?: string }; // type T = { msg: string | undefined };
function printMsg({msg = "default"}: T) {
    console.log(msg);
}

printMsg({msg: undefined}); // default

let l = [1, 2], r = [3, 4];
let lr = [...l, ...r];
console.log(lr); // [ 1, 2, 3, 4 ]
lr[0]++;
lr[3]--;
console.log(l, r); // [ 1, 2 ] [ 3, 4 ] (shallow copy)

let cat = {
    age: 0,
    miao() {
        console.log("miao");
    }
}
let tomcat = {name: "tomcat", ...cat};
cat.age = 22;
console.log(tomcat); // { name: 'tomcat', age: 0, miao: [Function: miao] } (deep copy)
