const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const jwtPassword = "12345";
const port = 3000;

app.use(express.json());

const ALL_USERS = [
  {
    username: "adityarajawat04@gmail.com",
    password: "123",
    name: "aditya rajawat",
  },
  {
    username: "pasha@gmail.com",
    password: "12346",
    name: "pasha bhai",
  },
  {
    username: "hello@gmail.com",
    password: "33243",
    name: "Hello Singh",
  },
];

function userExists(username, password) {
  // write logic to return true or false if user exists
  // in ALL_USERS array
  const userExists = false;
  const newuser = ALL_USERS.map(() => {
    if (username == username && password == password) {
      return (userExists = true);
    }
  });
  return userExists;
}

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.listen(port, () => {
  console.log(`Server started on localhost ${port}`);
});
