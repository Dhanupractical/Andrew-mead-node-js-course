const express = require("express");


console.log(__dirname)
console.log(__filename)

const app = express()

app.get("", (req, res) => {
  res.send("<h1>Weather</h1>")
});

app.get("/help", (req, res) => {
  res.send("Help page!");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/weather", (req, res) => {
  res.send("Your weather");
});

app.listen(3000, () => {
  console.log("server is up on port 3000.");
});
