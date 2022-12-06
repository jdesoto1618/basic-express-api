const express = require("express");
const router = express.Router();
const members = require("../../Members");
const uuid = require("uuid");

router.get("/", (req, res) => {
  res.json(members);
});

router.get("/:id", (req, res) => {
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

router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };

  if (!newMember.name || !newMember.email) {
    res
      .status(400)
      .json({ error: "New member was not submitted with a name or email" });
    return false;
  }

  members.push(newMember);

  res.json(members);
});

module.exports = router;