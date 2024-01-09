const express = require("express");
const app = express();
const port = 3000;

var users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      }
    ],
  },
];

app.use(express.json());

// for GET request popular input type is - query parameters

// Number of kidneys john have
app.get("/", (req, res) => {
  const numberofKidneys = users[0].kidneys.length;

  // Number of healthy kidneys
  const numberofHealthyKidneys = users.filter(
    (user) => user.kidneys[0].healthy === true
  );

  const TotalNumberofKidneys = numberofKidneys;
  const TotalNumberofHealthyKidneys = numberofHealthyKidneys.length;
  const TotalNumberofUnHealthyKidneys = TotalNumberofKidneys - TotalNumberofHealthyKidneys

  res.json({TotalNumberofKidneys, TotalNumberofHealthyKidneys, TotalNumberofUnHealthyKidneys});
});

// How many john kidneys are healthy
app.get("/", (req, res) => {});

// for POST request popular input type is - body
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    message: "Done!",
  });
});

// Replacting all unhealthy kidneys with healthy one's
app.put("/", (req, res) => {
  // const UpdatedKidneys =  users.forEach((hkidneys) => {
  //     hkidneys.kidneys[0].healthy = true
  // })

  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    Mission: "Successfull !",
  });
});

app.listen(port, () => {
  console.log(`Server started on locahost ${port}`);
});
