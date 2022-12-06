const express = require("express");
const app = express();
const port = process.env.port || 4000;
const path = require("path");
const members = require("./Members");

app.get("/api/members", (req, res) => {
  res.json(members);
});

app.get("/api/members/:id", (req, res) => {
  const memberExists = members.some(
    (member) => member.id === parseInt(req.params.id, 10)
  );

  if (!memberExists) {
    res.status(400).json({ error: `Member ${req.params.id} not found` });
    return false;
  }

  res.json(
    members.filter((member) => member.id === parseInt(req.params.id, 10))
  );
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Example express app listening on port ${port}`);
});
