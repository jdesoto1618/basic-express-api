const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello, world from express!");
});

app.listen(port, () => {
  console.log(`Example express app listening on port ${port}`);
});
