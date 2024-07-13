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
