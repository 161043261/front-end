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
