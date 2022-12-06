const express = require("express");
const app = express();
const port = process.env.port || 4000;
const path = require("path");
const moment = require("moment");
const members = require("./Members");

const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
  next();
};

app.use(logger);

app.get("/api/members", (req, res) => {
  res.json(members);
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Example express app listening on port ${port}`);
});
