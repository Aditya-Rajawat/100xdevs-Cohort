// const express = require("express");
// const app = express();
// const port = 3000;

// // function sum(n){
// //     let ans = 0;
// //     for (i=0; i<n; i++){
// //       ans = ans + i;
// //     }
// //     return ans
// // }

// // sum()

// // app.get("/", (req, res) => {
// //     const n = req.query.n
// //     res.status(200).send("value of n is " + n)
// // })

// const users = [{
//     name : "max",
//     kidneys: [{
//         healthy: false
//     }]
// }];

// // How many kidneys max have
// // How many unhealthy kidneys does max have
// // How many healthy kidneys does max have

// app.get("/", (req, res) => {
//     // How many kidneys does max have
//     const MaxKidneys = users[0].kidneys.length
//     // How many unhealthy kidneys does max have
//     const unhealthyKidneys = users.filter((hkidneys) => {
//         hkidneys.kidneys.healthy = false
//     })
//     console.log(unhealthyKidneys)
//     res.json([
//         MaxKidneys,
//         unhealthyKidneys
//     ])
// })

// app.listen(port, () => {
//     console.log(`Server is running on localhost ${port}`)
// })



const express = require("express")
const app = express()
const port = 3000;

var users = [{
    name : "John",
    kidneys : [{
        healthy : false
    }]
}]

// how many kidneys does john have and his kidney health



app.listen(port, () => {
    console.log(`Server started on locahost ${port}`)
})


