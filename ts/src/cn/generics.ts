function fm<T>(arr: T[]): T {
    return arr[0];
}

function fn<T>(arr: Array<T>): T {
    return arr[0];
}

let fp: <T>(arr: T[]) => T = fn;

let fq: { <T>(arr: T[]): T } = fn;

interface IFx {
    <T>(arr: T[]): T;
}

let fr: IFx = fn;

interface IFy<T> {
    (ar: T[]): T;
}

let fs: IFy<number> = fn;

let ns: number[] = [2024, 7, 9]
let ss: string[] = ["bh3", "ys", "sr"]

console.log(fr(ns)) // 2024
console.log(fr(ss)) // bh3
console.log(fs(ns)) // 2024
// console.log(fs(ss)) // error

class Vec<T> {
    arr: T[];
    getn: (n: number) => T;

    get1(): T {
        return this.arr[0];
    }
}

let vec = new Vec<string>();

vec.arr = ["bh3", "ys", "sr"];
console.log(vec.get1()) // bh3

vec.getn = function (n: number): string {
    return this.arr[n];
}
console.log(vec.getn(2)) // sr

// generic constraint
interface lengthwise {
    length: number;
}

function copy<T extends lengthwise>(arg: T): T {
    console.log(arg.length)
    return JSON.parse(JSON.stringify(arg));
}

let obj = copy({name: "dick", length: 18}); // 18
let arr = copy([1, 2, 3]); // 3

interface Animal {
    desc: string;
}

class Cat implements Animal {
    desc: string = "cat";
}

class Dog implements Animal {
    desc: string = "dog";
}

// constructor
function createCat<A extends Animal>(Arg: { new(): A; }): A {
    return new Arg();
}

function createDog<A extends Animal>(Arg: new () => A): A {
    return new Arg();
}

console.log(createCat(Cat).desc); // cat
console.log(createDog(Dog).desc); // dog
