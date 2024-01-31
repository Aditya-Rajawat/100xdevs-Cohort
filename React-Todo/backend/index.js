const express = require("express")
const app = express()
const port = 3000;

app.use(express.json())

app.post("/todo", (req, res) => {
// logic 
})

app.get("/todos", (req, res) => {
// logic 
})

app.put("/", (req, res) => {
// logic 
})

app.listen(port), () => {
    console.log(`Server started on port ${port}`)
}