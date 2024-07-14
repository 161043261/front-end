type Echo = (left?: string, right?: string) => void

// l: optional parameters with default value
// r: optional parameters must be placed after required parameters
let echo: Echo = function (left = "Yae", right?: string): void {
    if (right == undefined) console.log(left);
    else console.log(left, right);
}

echo(); // Yae
echo("Yae", "Miko"); // Yae Miko

// rest parameters (use ...)
function println(head: string, ...rest: string[]) {
    console.log(head, rest.join("-"));
}

println("Honkai", "Star", "Rail"); // Honkai Star-Rail

let cout: (head: string, ...rest: string[]) => void = println;
cout("Honkai", "Star", "Rail"); // Honkai Star-Rail

// Overload Signature
function getDate(timestamp: number): Date;
function getDate(m: number, d: number, y: number): Date;
function getDate(m_timestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, m_timestamp, d); // is m
    } else {
        return new Date(m_timestamp); // is timestamp
    }
}

console.log(getDate(Date.parse(new Date().toString())));
console.log(getDate(2, 28, 2002));
