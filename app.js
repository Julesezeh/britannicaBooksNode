const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("<h1>Wagwan</h1>")
})

app.post("/", (req, res) => {
    const { name } = req.body;
    return res.status(200).send(`<h1>${name}</h1>`)
})



app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})