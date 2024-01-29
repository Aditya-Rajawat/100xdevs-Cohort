const express = require("express")
const app = express();
const port = 3000;

app.post("/admin/signup", (req, res) => {
    // logic
})

app.post("/admin/coursesDescription", (req, res) => {
    // logic
})

app.get("/admin/coursesDescription", (req, res) => {
    // logic
})

app.listen(port, () => {
    console.log(`Server started on localhost ${port}`)
})