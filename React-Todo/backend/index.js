const express = require("express")
const app = express()
const port = 3000;

app.use(express.json())

app.post("/todo", (req, res) => {
// logic 
    const username = req.headers.username;
    const title = req.headers.title;
    res.json({
        msg : "Todo Created!!"
    })
})

app.get("/todos", (req, res) => {
// logic
const todo = req.body.todo;
res.json({
    msg : "All set"
})
})

app.put("/", (req, res) => {
// logic 
})

app.listen(port), () => {
    console.log(`Server started on port ${port}`)
}