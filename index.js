const express = require("express");
const app = express();
const port = process.env.port || 4000;

app.get("/", (req, res) => {
  res.send("Hello, world from express! Now using nodemon :D");
});

app.listen(port, () => {
  console.log(`Example express app listening on port ${port}`);
});
