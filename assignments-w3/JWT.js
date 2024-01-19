const jwt = require("jsonwebtoken");
const express = require("express");
const port = 3000;
const jwtPassword = "secret";

const app = express();

const contents = {
  name: "Aditya",
  branchname: "Canara Bank",
  accountnumber: "SBI1234",
};

const token = jwt.sign(contents, jwtPassword);
console.log(token)

const decodeverification = jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRpdHlhIiwiYnJhbmNobmFtZSI6IkNhbmFyYSBCYW5rIiwiYWNjb3VudG51bWJlciI6IlNCSTEyMzQiLCJpYXQiOjE3MDU2NDk2MTN9.j8nQSsK_OlXqzWCTejMtXP6ZIZcO7xJ4kcaCw91U-NE",
  jwtPassword
);

console.log(decodeverification);

app.listen(port);
