const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hellooooo");
});

app.get("/about", (req, res) => {
  res.send("about nè anh em");
});

app.listen(port, () => {
  console.log(`http:://localhost:${port}`);
});
