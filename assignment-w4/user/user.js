const express = require('express')
const app = express();
const port = 3001

app.post("/users/signupDescription", (req, res) => {
    // logic
})

app.get("/users/coursesDescription", (req, res) => {
    // logic
})

app.post("/users/courses/:courseIdDescription", (req, res) => {
    // logic
})

app.get("/users/purchasedCoursesDescription", (req, res) => {
    // logic
})

app.listen(port, () => {
    console.log(`Server started on localhost ${port}`)
})