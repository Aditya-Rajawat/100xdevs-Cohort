const express = require("express");

const app = express();

const port = 3000;

function userMiddleware(req, res, next) {
  if (username === "Aditya" && password === 12345) {
    next();
  } else {
    res.json({
      msg: "Bad inputs",
    });
  }
}

function kidneyMiddleware(req, res, next) {
  if (kidneyId == 1 || kidneyId == 2) {
    next();
  } else {
    res.json({
      msg: "authentication failed!!",
    });
  }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;
  res.send({
    msg: "your kidneys are fine",
  });
});

app.listen(port, () => {
  console.log(`Server started on localhost ${port}`);
});
