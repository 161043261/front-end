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
let tp: readonly [string, number] = ["Tomcat", 2024];
console.log(tp[0].substring(3)); // cat
console.log(tp[1].toString());   // 2024

// enum
enum Color { RED, GREEN, BLUE }; // 0 1 2
console.log(Color.RED);          // 0

// Type Assertion
let tex: any = "tex";
let len: number;
len = (<string>tex).length;   // assert tex is a string
len = (tex as string).length; // assert tex is a string

// never: variable never exists
function err(msg: string): never {
    throw new Error(msg); // return value never exists
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
