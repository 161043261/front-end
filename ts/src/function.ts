type Echo = (left?: string, right?: string) => void

// left: optional parameters with default value
// optional parameters must be placed after required parameters
let echo: Echo = function (left = "Yae", right?: string): void {
    if (right == undefined) console.log(left);
    else console.log(left, right);
}

echo(); // Yae
echo("Yae", "Miko"); // Yae Miko

// rest parameters (use ...)
function println(head: string, ...rest: string[]) {
    console.log(head, rest.join("-"));
}

println("Honkai", "Star", "Rail"); // Honkai Star-Rail

let cout: (head: string, ...rest: string[]) => void = println;
cout("Honkai", "Star", "Rail"); // Honkai Star-Rail

// Overload Signature
function getDate(timestamp: number): Date;
function getDate(m: number, d: number, y: number): Date;
function getDate(mTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mTimestamp, d); // is m
    } else {
        return new Date(mTimestamp); // is timestamp
    }
}

console.log(getDate(Date.parse(new Date().toString())));
console.log(getDate(2, 28, 2002));

// Append
function add(x: number, y: number): number {
    return x + y;
}

let sum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}

interface IFinder {
    // method signature
    (source: string, substring: string): boolean;
}

let finder: IFinder;
finder = function (source: string, substring: string): boolean {
    return source.search(substring) != -1;
}

// optional parameter
function buildName(first: string, last?: string): string {
    if (last != null) return first + last;
    return first;
}

let tomcat: string = buildName('Tom', 'Cat');
console.log(tomcat);
let tom: string = buildName('Tom');
console.log(tom);

function push(array: any[], ...items: any[]): void {
    items.forEach((item: any): void => {
        array.push(item);
    });
}

let arr /* any[] */ = [];
push(arr, 1, 'a');

// overload by function signature
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
