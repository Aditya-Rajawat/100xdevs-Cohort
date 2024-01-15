const express = require("express");

const app = express();

const port = 3000;

app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  //   Input Validation
  if (username === "aditya" && password == "12345") {
    res.json({
      msg: "Validation Done!!",
    });
  }

  //   Authentication
  if (kidneyId == 1 || kidneyId == 2) {
    res.json({
      msg: "Authentication Done!!",
    });
  }
});

app.listen(port, () => {
  console.log(`Server started on localhost ${port}`);
});
