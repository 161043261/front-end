class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet(): string {
        return "hello: " + this.greeting;
    }
}

let greeter: Greeter = new Greeter("world")

abstract class Animal { // abstract class
    // keyword 'public' automatically add attribute 'name'
    constructor(public name: string) {
    }

    echo(): void {
        console.log(this.name);
    }

    abstract print(): void; // abstract method (no implementation)
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    print(): void {
        console.log(this.name);
    }
}

let tom: Cat = new Cat("Tom");
tom.echo();  // Tom
tom.print(); // Tom

class Person {
    // keyword 'readonly' automatically add attribute 'gender'
    constructor(readonly gender: number = 1) {
    }

    private _name: string = "";

    get name(): string {
        console.log("getter")
        return this._name
    }

    set name(_name: string) {
        console.log("setter")
        this._name = _name;
    }
}

let p: Person = new Person();
p.name = 'kun';     // setter
console.log(p.name) // getter kun

class Grid {
    static origin = {x: 0, y: 0};

    // keyword 'public' automatically add attribute 'scale'
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
