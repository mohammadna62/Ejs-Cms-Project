const express = require("express");
const { userValidator } = require("./../validators/user.validator");
const { validationResult } = require("express-validator");

const router = express.Router();

router.post("/signup", userValidator(), (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const obj = {};
    result.errors.forEach((error) => {
      obj[error.path] = error.msg;
    });
  }
  return res.json({ message: "User Registered Successfully" });
});

module.exports = router;
