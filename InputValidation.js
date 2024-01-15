const express = require("express");
const zod = require("zod");
const app = express();
const port = 3000;

const schema = zod.array(zod.number());

// Email Validation Schema

// Email : string
// Password : atleast 8 characters
// Country : "IN", "US"

// const emailSchema = zod.object({
//     email : zod.string(),
//     password : zod.string().zod.number(),
//     country : zod.literal("IN").or(zod.literal("US"))
// })

app.use(express.json());

app.post("/", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if(!response.success){
    res.send("Bad Inputs")
  }else{
    res.send(response);
  }
});

// global catches
app.use(function (err, req, res, next) {
  res.send("Server is down for now. Check back soon !!");
});

app.listen(port, () => {
    console.log(`Server started on localhost ${port}`)
});
