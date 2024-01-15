const express = require("express");

const app = express();

const port = 3000;

app.use(express.json())

app.post("/", (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("You have " + kidneyLength + " kidneys");
})

// global catches
app.use(function(err, req, res, next){
    res.send("Server is down for now. Check back soon !!")
})

app.listen(port)