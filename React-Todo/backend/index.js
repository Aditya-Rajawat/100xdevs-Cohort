const express = require("express")
const app = express()
const port = 3000;

app.use(express.json())

app.use(userMiddleware)

function userMiddleware (req, res, next){
    if(username == "aditya"){
        next()
    }
}

app.post("/todo", (req, res) => {
// logic 
    const username = req.headers.username;
    const title = req.headers.title;
    res.json({
        msg : "Todo Create!!"
    })
})

app.get("/todos", (req, res) => {
// logic
const todo = req.body.todo;
res.json({
    msg : "All set & done"
})
})

app.put("/", (req, res) => {
// logic
const newName = req.params.newName;
const newTitle = req.params.newTitle;
res.json({
    msg : "Not done yet"
}) 
})

app.listen(port), () => {
    console.log(`Server started on port ${port}`)
}