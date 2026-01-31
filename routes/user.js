const express = require("express");
const { userValidatorSchema } = require("../validators/user.validator");
const validate = require("../middlewares/joi.validator");
// const { userValidator } = require("./../validators/user.validator");
// const validate = require("../middlewares/validate");

const router = express.Router();
//<-------------Express validator---------------->
// router.post("/signup", userValidator(),validate, (req, res) => {

//   return res.json({ message: "User Registered Successfully" });
// });
//<---------------------Joi Validator -------------------->
router.post("/signup", validate(userValidatorSchema), async (req, res) => {
  return res.json({ msg: "User register successfully :))" });
});

module.exports = router;
