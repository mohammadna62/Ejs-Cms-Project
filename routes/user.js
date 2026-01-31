const express = require("express");
const {
  userValidatorSchema,
  signUpSchema,
} = require("../validators/user.validator");
const { validate } = require("express-validation");
//const validate = require("../middlewares/joi.validator");
// const { userValidator } = require("./../validators/user.validator");
// const validate = require("../middlewares/validate");

const router = express.Router();
//<-------------Express validator---------------->
// router.post("/signup", userValidator(),validate, (req, res) => {

//   return res.json({ message: "User Registered Successfully" });
// });
//<---------------------Joi Validator -------------------->
router.post("/signup", async (req, res) => {
  const [error] = signUpSchema.validate(req.body);
  if (error) {
    const errorObject = {};
    errorObject[error.path] = error.message;

    return res.status(400).json(errorObject);
  }

  return res.status(201).json({ msg: "User register successfully :))" });
});

module.exports = router;
