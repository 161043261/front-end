// <Generics>(args) => ReturnType | function type declaration
// <Generics>(args): ReturnType   | method declaration

function fn<T>(arr: T[]/* Array<T> */): T {
    // console.log(arr.length);
    return arr[0];
}

let fp: <T>(arr: T[]) => T = fn; // function type annotation

let fq: { <T>(arr: T[]): T } = fn; // interface type annotation

console.log(fp<number>([200, 202, 301, 404, 502])); // 200
// automatic generics inference: <string> can be omitted
console.log(fq(["OK", "Accepted", "Moved Permanently", "Not Found", "Bad Gateway"])); // OK

interface IFx {
    <T>(arr: T[]): T; // generic parameters T that can be used by a member
}

interface IFy<T> { // generics parameter T that can be used by all members
    (ar: T[]): T;
}

let fx: IFx = fn;
let fy: IFy<number> = fn;

let numArr: number[] = [2024, 10, 24]
let strArr: string[] = ["bh3", "ys", "sr"]

console.log(fx<number>(numArr)) // 2024
console.log(fx(strArr)) // bh3, <string> is omitted
console.log(fy(numArr)) // 2024
// console.log(fy(strArr)) // error

class Vec<T> {
    arr: T[] = Array<T>(0);

    getN: (n: number) => T = (n: number): T => {
        return this.arr[n];
    }

    // getN: (n: number) => T = function (this: Vec<T>, n: number): T {
    //     return this.arr[n];
    // }

    get0(/* this: Vec<T> */): T {
        return this.arr[0];
    }
}

let vec: Vec<string> = new Vec<string>();

vec.arr = ["bh3", "ys", "sr"];
console.log(vec.get0()) // bh3
console.log(vec.getN(2)) // sr

// generic constraint
interface lengthwise {
    length: number;
}

function copy<T extends lengthwise>(arg: T): T {
    console.log(arg.length)
    return JSON.parse(JSON.stringify(arg));
}

let obj: { name: "dick", length: 18 } = copy({name: "dick", length: 18}); // 18
let arr: number[] = copy([1, 2, 3]); // 3
console.log(obj, arr) // { name: 'dick', length: 18 } [ 1, 2, 3 ]

// ***** Map *****
let dict: Map<string, number> = new Map<string, number>([
    ["OK", 200],
    ["Accepted", 202],
    ["Moved Permanently", 301],
    ["Not Found", 404],
]);

// insert
dict.set("Bad Gateway"/* key */, 502/* value */);

// delete
dict.delete("OK");
console.log("OK" in dict, dict.has("OK")); // false false

// foreach
for (const key of dict.keys()) {
    console.log(key, ":", dict.get(key));
}

dict.forEach((value: number, key: string): void => {
    console.log(key, ":", value);
})

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

// Append
function getArr(length: number, value: any): Array<any> {
    let ret: any[] = [];
    for (let i: number = 0; i < length; i++) {
        ret[i] = value;
    }
    return ret;
}


let arr: any[] = getArr(3, 'X');
console.log(arr);

function getTArr<T>(length: number, value: T): Array<T> /* T[] */ {
    let ret: T[] = [];
    for (let i: number = 0; i < length; i++) {
        ret[i] = value;
    }
    return ret;
}

let strArr: string[] = getTArr<string>(3, 'X');
console.log(strArr);

// ***** Multiple Generics Parameters *****
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

let tuple: [string, number] = swap([5, 'five']);
console.log(tuple);

// ***** Generics Constraints *****
interface Lengthwise {
    length: number;
}

function getLen<T extends Lengthwise>(arg: T): number {
    return arg.length;
}

console.log(getLen([1, 2, 3])); // 3
console.log(getLen({ name: "dick", length: 18 })); // 18
// in => index
// of => element (iterable)

// for (idx in array|string) { console.log(idx, arg[idx]); }
// for (key in object) { console.log(key, arg[key]); }
// for (elem of array|string) { console.log(elem); }
function copyField<T extends U, U>(target: T, source: U): T {
    for (let i in source) {
        target[i] = (source as T)[i];
    }
    return target
}

let target: { u: string, p: number } = { u: "root", p: 1024 };
copyField(target, { p: 2024 });
console.log(target); // { u: 'root', p: 2024 }

// ***** Generics Interface *****
interface IGetTArray {
    <T>(length: number, value: T): Array<T>; // also T[]
}

// interface IGetTArray<T> {
//     (length: number, value: T): Array<T>;
// }

let getTArray: IGetTArray = function <T>(length: number, value: T): Array<T> {
    let ret: T[] = [];
    for (let i: number = 0; i < length; i++) {
        ret[i] = value;
    }
    return ret
}

console.log(getTArray(3, 'Y'));

// ***** Generics Class *****
class Num<T = number> { // T: default types for generic parameters
    zero: T;
    add: (x: T, y: T) => T;
}

let num: Num<string> = new Num<string>();
num.zero = "";
num.add = function (x: string, y: string): string {
    return x + y;
}