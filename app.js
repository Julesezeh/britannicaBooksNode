const express = require("express");
const app = express();

let books = [];

app.use(express.json());

// // app.get("/", (req, res) => {
// //     res.status(200).send("<h1>Wagwan</h1>")
// // })

// // app.post("/", (req, res) => {
// //     const { name } = req.body;
// //     return res.status(200).send(`<h1>${name}</h1>`)
// })

app.post("/books", (req, res) => {
    const { body } = req.body;
    if (body) {
        books.push(body)
        return res.status(201).send(body)
    }
    return res.status(400).send("<h1>Bad request</h1>")

})



app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})