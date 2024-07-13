// ***** Type Assertion *****

// 1. variable as Type
// 2. <Type>variable

interface IAnimal {
    name: string;
}

interface ICat { // interface ICat extends IAnimal **implicitly**
    name: string;

    meow(): void;
}

let tom: ICat = { // object tom implements IAnimal and ICat;
    name: "tom", meow(): void {
        console.log("meow");
    }
}

let animal: IAnimal = {
    name: "tomcat"
}

function isAnimal(cat: ICat): void {
    console.log(typeof (cat as IAnimal).name); // child can be asserted as parent
}

function isCat(animal: IAnimal): void {
    console.log(typeof (animal as ICat).meow); // parent can also be asserted as child
}

isAnimal(tom); // string
isCat(animal); // undefined

class HttpError extends Error {
    code: number = 404;
}

// instanceof
function isHttpErr(error: Error): void {
    console.log(error instanceof HttpError);
}

isHttpErr(new HttpError()); // true
