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

app.post("/signup", async (req, res) => {
  const Realusername = req.body.username;
  const Realpassword = req.body.password;
  const Realemail = req.body.email;

    const userExists = await User.findOne({username : Realusername})

    if(userExists){
        return res.send("User already exist, Try with a different email")
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
