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

// Append
// abstract class cannot be instantiated
abstract class Animal {
    // | attribute | access control |
    // |-----------|----------------|
    // | public    | all            |
    // | protected | self, child    |
    // | private   | self           |
    public readonly name: string;
    // | constructor | extend | instantiate |
    // |-------------|--------|-------------|
    // | public      | √      | √           |
    // | protected   | √      | ×           |
    // | private     | ×      | ×           |
    public constructor(name: string) {
        console.log("constructing animal");
        this.name = name;
    }

    // abstract method must be implemented by child
    public abstract toString(): string;
}

class Cat extends Animal {
    public meow(): void {
        console.log(this.name, "meow");
    }

    public toString(): string {
        return this.name;
    }
}

let cat: Cat = new Cat('Tom'); // constructing animal
cat.meow(); // Tom meow
console.log(cat); // Cat { name: 'Tom' }

// A class can implement multiple interfaces.
// An interface can extend another interface.
// An interface can also extend a class.
