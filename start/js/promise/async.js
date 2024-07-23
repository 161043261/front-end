// async
async function fm() /* Promise<void> */ { // the async function returns a Promise object p
    // ***** async *****
    // 0. return;
    //    => p.PromiseState = "fulfilled";
    //    => p.PromiseResult = undefined | pending;
    //
    // 1. return + a non-Promise object
    //    => p.PromiseState = "fulfilled";
    //    => p.PromiseResult = the non-Promise object;
    //
    // 2. return + a Promise object
    //    => p.PromiseState = retVal.PromiseState;
    //    => p.PromiseResult = retVal.PromiseResult;
    //
    // 3. throw new Error(message);
    //    => p.PromiseState = "rejected";
    //    => p.PromiseResult = message;
    return; // return is redundant
}

// the async function returns a Promise object
console.log(fm()); // Promise { undefined }

// await is only valid in async function
async function fn() /* Promise<void> */ {
    let p = new Promise((resolve, reject) => {
        resolve("ok");
    });
    // 0. await + a fulfilled Promise object
    let res = await p; // wait p returns, res = p.PromiseResult
    console.log(res); // ok

    // 1. await + a rejected Promise object
    let q = new Promise((resolve, reject) => {
        reject("err")
    });
    try {
        await q;
    } catch (e) {
        console.error(e); // err
    }
}

let p /* Promise<void> */ = fn();
console.log(p); // Promise { <pending> }

// demo: concat ./1.txt ./2.txt ./3.txt
const fs = require("fs");
fs.readFile("./1.txt", "utf8", (err, f) => {
    if (err) throw err;
    fs.readFile('./2.txt', 'utf8', (err, s) => {
        if (err) throw err;
        fs.readFile('./3.txt', 'utf8', (err, t) => {
            if (err) throw err;
            console.log(f + s + t); // 1st 2nd 3rd
        });
    });
});

const util = require("util");
const promisedReadFile = util.promisify(fs.readFile);

async function af() {
    let f, s, t;
    try {
        t = await promisedReadFile("./3.txt");
        s = await promisedReadFile("./2.txt");
        f = await promisedReadFile("./1.txt");
    } catch (e) { /* do nothing */
        console.error(e);
    }
    console.log(t + s + f); // 3rd 2nd 1st
}

let q /* Promise<void> */ = af();