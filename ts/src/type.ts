// boolean
let done: boolean = false;

// number
let dec: number = 6;
let hex: number = 0xfab;
let bin: number = 0b101;
let oct: number = 0o755;

// string
let username: string = "Tom";
username = `${username}cat`;
console.log(username); // Tomcat

// array
let ls: number[] = [1, 2, 3];
let arr: Array<number> = [1, 2, 3];

// tuple
let tuple: [string, number] = ["Tomcat", 2024];
console.log(tuple[0].substring(3)); // cat
console.log(tuple[1].toString());   // 2024

// enum
enum Color { RED = 1, GREEN, BLUE } // 1 2 3
console.log(Color.RED); // 1

// Type Assertion
let tex: any = "tex";
let len: number;
len = (<string>tex).length;   // assert tex as a string
len = (tex as string).length; // assert tex as a string


let u: undefined = undefined;
let v: void = undefined;
let n: null = null;

// never: variable never exists
function err(msg: string): never {
    throw new Error(msg); // function never returns
}

// never: function never returns
function loop(): never {
    while (true) {
    } // function never returns
}

// Union Types
function printId(id: number | string) {
    console.log("id:", id);
}

printId(6);   // id: 6
printId("6"); // id: 6


// Append
// ***** Type *****
// 1. Primitive data types: boolean, number, string, null, undefined, Symbol, BigInt
// 2. Object types
let done: boolean = false;

// Type 'Boolean' is not assignable to type 'boolean'.
// 'boolean' is a primitive, but 'Boolean' is a wrapper object. 
// Prefer using 'boolean' when possible.
let oBool: Boolean = new Boolean(1);
let vbool: boolean = Boolean(1);

let dec: number = 6;
let hex: number = 0xfa;
let bin: number = 0b10;
let oct: number = 0o77;
let NotaNumber: number = NaN;
let inf: number = Infinity;

let username: string = 'root';
let command: string = `mysql -u${username} -p`;
console.log(command); // mysql -uroot -p

let v: void = undefined;
let u: undefined = undefined;
let n: null = null;

// union types
let num: number | string;
num = 8;
num = "eight";

// ***** Type Alias *****
type Name = string;
type Generator = () => string;
type NameGenerator = Name | Generator;

function getName(x: NameGenerator): string {
    return typeof x === 'string' ? x : x();
}

type Want = 'y' | 'n';

function apt(want: Want): void {
    if (want === 'y') console.log('continue');
    else if (want === 'n') console.log('exit');
}

apt('y'); // continue
