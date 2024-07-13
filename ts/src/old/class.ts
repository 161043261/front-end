class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet(): string {
        return "hello: " + this.greeting;
    }
}

let greeter = new Greeter("world")

abstract class Animal { // abstract class
    constructor(public name: string) {
    }

    echo() {
        console.log(this.name);
    }

    abstract print(): void; // abstract method
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    print() {
        console.log(this.name);
    }
}

let tom = new Cat("Tom");
tom.echo();  // Tom
tom.print(); // Tom

class Person {
    readonly name: string; // unmutable

    // constructor
    constructor(name = "kun") {
        this.name = name;
    }

    private _age: number;

    get age(): number {
        console.log("getter")
        return this._age
    }

    set age(_age: number) {
        console.log("setter")
        this._age = _age;
    }
}

let p = new Person();
p.age = 22;        // setter
console.log(p.age) // getter 22

class Grid {
    static origin = {x: 0, y: 0};

    constructor(public scale: number) {
    }

    calculate(point: { x: number; y: number; }) {
        let dx = (point.x - Grid.origin.x);
        let dy = (point.y - Grid.origin.y);
        return Math.sqrt(dx * dx + dy * dy) / this.scale;
    }
}

let grid = new Grid(5.0);  // 5x scale

console.log(grid); // Grid { scale: 5 }
console.log(grid.calculate({x: 3, y: 4})); // 1
