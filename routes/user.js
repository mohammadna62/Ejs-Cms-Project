const express = require("express");
const { userValidator } = require("./../validators/user.validator");
const validate = require("../middlewares/validate");


const router = express.Router();

router.post("/signup", userValidator(),validate, (req, res) => {
  
  return res.json({ message: "User Registered Successfully" });
});

module.exports = router;
