const fs = require("fs");
const util = require("util");

// use callback function
fs.readFile('./README.md', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data); // # Promise
});

// use Promise
let p = new Promise((resolve, reject) => {
    fs.readFile('./README.md', (err, data) => {
        if (err) reject(err); // pending => rejected
        resolve(data); // pending => fulfilled
    });
});

p.then(function (data) {
    console.log(data.toString()); // # Promise
}, (err) => {
    console.log(err);
});

// use util.promisify()
let promisedReadFile = util.promisify(fs.readFile);
promisedReadFile('./README.md').then((data) => {
    console.log(data.toString()); // # Promise
});

