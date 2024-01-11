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
  const HealthyKidneys = users[0].kidneys
  const TotalHealthyKidneys = HealthyKidneys.filter((kidney) => kidney.healthy===true);
  console.log(TotalHealthyKidneys)

  const TotalNumberofKidneys = numberofKidneys;  
  const TotalNumberofHealthyKidneys = TotalHealthyKidneys.length;  
  const TotalNumberofUnHealthyKidneys = TotalNumberofKidneys - TotalNumberofHealthyKidneys

  res.json({TotalNumberofKidneys, TotalNumberofHealthyKidneys, TotalNumberofUnHealthyKidneys});
});

// for POST request popular input type is - body
app.post("/", (req, res) => {
  const isnewHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isnewHealthy,
  });
  console.log(users[0].kidneys)
  res.json({
    message: "Done!",
  });
});

// Replacting all unhealthy kidneys with healthy one's
app.put("/", (req, res) => {
    const UserKidneys = users[0].kidneys

    UserKidneys.map((kidney) => {
        kidney.healthy = true
    })
  res.json({
    Mission: "Successfull!",
  });
});

// Removing all the unhealthy kidneys
app.delete("/", (req, res) => {
  const Kidneys = users[0].kidneys
  const HealthyKidneys = Kidneys.filter((kidney) => (
    kidney.healthy === true
  ))
    users[0].kidneys = HealthyKidneys;
    
  res.json({
    Talk : "Hogya Bro!!"
  })
})

app.listen(port, () => {
  console.log(`Server started on localhost ${port}`);
});
