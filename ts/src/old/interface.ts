// Object Interface
interface IPeople {
    name: string;
}

function printPeople(people: IPeople) {
    console.log(people.name);
}

let tomcat = {age: 22, name: "Tomcat"};
printPeople(tomcat); // Tomcat

interface IConfig {
    c?: string; // optional attribute
    w?: number; // optional attribute
}

function getSquare(config: IConfig): { color: string; width: number } {
    let square = {color: "white", width: 0};
    if (config.c != null) {
        square.color = config.c;
    }

    if (config.w != null) {
        square.width = config.w;
    }
    return square;
}

let square = getSquare({c: "black"})
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
    let res = src.search(sub);
    return res > -1;
}

// Indexable Type
interface IStrArr {
    readonly [index: number]: string; // index signature
}

let strArr: IStrArr;
strArr = ["Tom", "Jerry"];
// strArr[0] = "Tomcat" // error

// Class Interface
interface IClock {
    currTime: Date;

    setTime(d: Date); // method signature
}

class Clock implements IClock {
    currTime: Date;

    setTime(d: Date) { // method implementation
        this.currTime = d
    }
}

// Interface Inheritance
interface IColor {
    color: string;
}

interface ICircle extends IColor {
    radius: number;
}

let circle = <ICircle>{};
circle.color = "blue";
circle.radius = 10;
console.log(circle); // { color: 'blue', radius: 10 }
