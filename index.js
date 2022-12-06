const express = require("express");
const app = express();
const port = process.env.port || 4000;
const path = require("path");
const members = require("./Members");

app.get("/api/members", (req, res) => {
  res.json(members);
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Example express app listening on port ${port}`);
});
