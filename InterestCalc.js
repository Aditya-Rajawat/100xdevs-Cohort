const express = require("express")
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    const principal = req.query.principal;
    const rate = req.query.rate;
    const time = req.query.time
    const SI = (parseInt(principal) * parseInt(rate) * parseInt(time))/100;
    res.json({
        Interest : SI
    })
})

app.listen(port, () => {
    console.log(`Sever started on localhost : ${port}`)
})