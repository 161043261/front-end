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
