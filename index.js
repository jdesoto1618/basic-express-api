const express = require("express");
const app = express();
const port = process.env.port || 4000;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Example express app listening on port ${port}`);
});
