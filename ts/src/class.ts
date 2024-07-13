// abstract class cannot be instantiated
abstract class Animal {
    // | attribute | Access      |
    // |-----------|-------------|
    // | public    | all         |
    // | protected | self, child |
    // | private   | self        |
    public readonly name: string;
    // | constructor | extend | instantiation|
    // |-------------|--------|--------------|
    // | public      | √      | √            |
    // | protected   | √      | ×            |
    // | private     | ×      | ×            |
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
