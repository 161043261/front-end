let fib0: number[] = [1, 1, 2, 3, 5];

let fib1: Array<number | string> = [1, 1, 2, 3, 5];
fib1.push('8');

interface NumberArray {
    [index: number]: number; // NumberArray[number] = number
}

let fib2: NumberArray = [1, 1, 2, 3, 5];

function sum(): void {
    console.log(arguments);
    let nArgs: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;

    let aArgs: IArguments = arguments;
}

// ***** Source Code *****
// interface IArguments {
//     [index: number]: any;
//     length: number;
//     callee: Function;
// }

let ls: any[] = ['yukino', 22, {url: 'https://github.com/161043261'}];
