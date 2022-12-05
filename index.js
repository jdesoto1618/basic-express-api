const express = require("express");
const app = express();
const port = process.env.port || 4000;
const path = require("path");

const members = [
  {
    id: 1,
    name: "John Doe",
    email: "john@email.com",
    status: "active",
  },
  {
    id: 2,
    name: "Bob Sagat",
    email: "bobs@email.com",
    status: "inactive",
  },
  {
    id: 3,
    name: "Shannon O'Shannon",
    email: "shannonx2@email.com",
    status: "active",
  },
];

app.get("/api/members", (req, res) => {
  res.json(members);
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Example express app listening on port ${port}`);
});
