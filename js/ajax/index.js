const express = require("express")
const app = express();

// Cross-Origin Resource Sharing
app.get('/home', (req, resp) => {
    console.log(__dirname); // absolute path
    resp.sendFile(__dirname + '/index.html');
})

app.get('/data', (req, resp) => {
    resp.send(JSON.stringify({username: "miHoYo", password: 1024}));
})

app.listen(7000, async () => {
    console.log("command + click => http://localhost:7000/home");
});
