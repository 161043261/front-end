interface Person {
    age: number;
    name: string;
}

interface Person {
    name: string;

    toString(): string;
}

// ***** merge *****
// interface Person {
//     age: number;
//     name: string;
//     toString(): string;
// }
