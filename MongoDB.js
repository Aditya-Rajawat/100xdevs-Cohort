const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://aditya:WfEGdxDkbe99A2EE@cluster0.qgdt0.mongodb.net/userappnew"
);

const User = mongoose.model("Users", {
  username: String,
  password: String,
  email: String,
});

app.post("/signup", (req, res) => {
  const Realusername = req.body.username;
  const Realpassword = req.body.password;
  const Realemail = req.body.email;

    const userExists = User.findOne({username : Realusername})

    if(userExists){
        res.send("User already exist")
    }

  const user = new User({
    username: Realusername,
    password: Realpassword,
    email: Realemail,
  });
  user.save();
  res.send("User successfully created")
});


app.listen(port, () => {
  console.log(`App started on localhost ${port}`);
});
