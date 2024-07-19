// Object Interface
interface IPeople {
    name: string;
}

function fp(people: IPeople) {
    console.log(people.name);
}

let tomcat = {age: 22, name: "Tomcat"};
fp(tomcat); // Tomcat

interface IConfig {
    c?: string; // optional attribute
    w?: number; // optional attribute
    [propName: string]: any; // any attribute
}

function getSquare(config: IConfig): { color: string; width: number } {
    let square: { color: string; width: number } = {color: "white", width: 0};
    if (config.c != null) square.color = config.c;
    if (config.w != null) square.width = config.w;
    return square;
}

let square: { color: string; width: number } = getSquare({c: "black"})
console.log(square); // { color: 'black', width: 0 }

interface IPoint {
    readonly x: number; // readonly attribute
    readonly y: number; // readonly attribute
}

let p1: IPoint = {x: 10, y: 20};

// ReadonlyArray
let arr: number[] = [1, 2, 3];
let ro: ReadonlyArray<number> = arr;
console.log(arr == ro); // true

arr[2] = 4;
console.log(ro); // [1, 2, 4]
arr = ro as number[];

// Function Interface
interface ISearch {
    (source: string, substring: string): boolean;
}

let search: ISearch;
search = function (src: string, sub: string): boolean {
    // src: source; sub: substring;
    let res = src.search(sub);
    return res > -1;
}

// Indexable Type
interface IStrArr {
    readonly [index: number]: string; // index signature
}

let strArr: IStrArr;
strArr = ["Tom", "Jerry"];

// strArr[0] = "Tomcat" // error, strArr[number] is readonly

interface IDict {
    size?: number;

    [index: string]: any;
}

let dict: IDict = {};
dict['parser'] = "@typescript-eslint/parser";
dict['plugins'] = ['@typescript-eslint'];
dict['rules'] = {'no-var': "error"}
dict.size = 3;
console.log(dict);

// An interface can extend another interface
interface IColor {
    color: string;
}

interface ICircle extends IColor {
    radius: number;
}

let circle: ICircle = <ICircle>{};
circle.color = "blue";
circle.radius = 10;
console.log(circle); // { color: 'blue', radius: 10 }

// Append
interface IPerson {
    readonly id: number;
    name: string;
    age?: number; // optional attribute
    [key: string]: number | string; // IPerson[string] = number | string
}

let tom: IPerson = {
    id: 19050100120,
    name: 'tom',
    age: 22,
    gender: 'male'
};

console.log(tom.gender); // male
console.log(tom["gender"]); // male
