const express = require("express");
const router = express.Router();
const members = require("../../Members");

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
  res.send(req.body);
});

module.exports = router;
