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
  let isExist = false;
  ALL_USERS.map((user) => {
    if (user.username == username && user.password == password) {
      return (isExist = true);
    }
  });
  return isExist
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

app.get('/users', (req, res) => {
  const token = req.headers.authorization
  console.log(token)
  const decoded = jwt.verify(token, jwtPassword)
  const username = decoded.username
  res.json({
    users : username,
    users : ALL_USERS
  })
})

app.listen(port, () => {
  console.log(`Server started on localhost ${port}`);
});
