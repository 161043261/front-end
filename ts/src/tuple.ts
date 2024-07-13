let tuple: [string, number] = ['Tom', 22];
console.log(tuple[0].slice(1)); // om
console.log(tuple[1].toFixed(2)); // 22.00
tuple[1] = parseFloat(tuple[1].toFixed(2));

tuple.push('male');
tuple.push(1); // You can only push strings or numbers
