const express = require("express")
const app = express()
const port = 3000;

app.use(express.json())

app.get("/", (req, res) => {
// logic 
const username = req.body.username;
})

app.post("/", (req, res) => {
// logic 
})

app.put("/", (req, res) => {
// logic 
const username = req.body.username;
const email = req.body.email;
res.json({
    msg : "hello"
})
})

app.listen(port), () => {
    console.log(`Server started on port ${port}`)
}