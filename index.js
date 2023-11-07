const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get("/contact-me", (req, res) => {
    res.sendFile(__dirname + '/views/contact-me.html');
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
})

app.use((req, res, next) => {
    res.status(404).send("Page not found");
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})