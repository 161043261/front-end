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
