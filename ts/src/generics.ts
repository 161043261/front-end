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
console.log(getLen({name: "dick", length: 18})); // 18
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

let target: { u: string, p: number } = {u: "root", p: 1024};
copyField(target, {p: 2024});
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