const express = require("express");
const app = express();
const port = process.env.port || 4000;
const path = require("path");

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));

app.listen(port, () => {
  console.log(`Example express app listening on port ${port}`);
});
