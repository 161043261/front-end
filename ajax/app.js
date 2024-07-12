const express = require("express")
const app = express();
// app.use(express.json());

app.all("/axios", (req, resp) => {
    // Allow CROS (Cross-Origin Resource Sharing)
    resp.setHeader("Access-Control-Allow-Origin", ["http://127.0.0.1:3000"]); // Access-Control-Allow-Origin
    // Allow custom headers
    resp.setHeader("Access-Control-Allow-Headers", "*");
    resp.setHeader("Access-Control-Allow-Method", "*");
    resp.send("Honkai: Star Rail");
});

app.post("/data", (req, resp) => {
    resp.setHeader("Access-Control-Allow-Origin", "*");
    setTimeout(() => {
        const data = { u: 'HoYoverse', p: 2024 };
        resp.send(JSON.stringify(data));
    }, 2000);
});

app.all("/fetch", (req, resp) => {
    resp.setHeader("Access-Control-Allow-Origin", "*");
    resp.setHeader("Access-Control-Allow-Headers", "*");
    resp.send(JSON.stringify({ 'Genshin': 'Impact' }));
});

app.all("/main", (req, resp) => {
    // Request Line (URL parameters)
    console.log(req.query); // { u: 'root', p: '1024' }
    resp.setHeader("Access-Control-Allow-Origin", "*");
    resp.setHeader("Access-Control-Allow-Headers", "*");
    resp.send("Honkai Impact");
});

app.listen(8000, async () => {
    console.log("command + click => http://localhost:8000");
});
