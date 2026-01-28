const express = require("express");
const { userValidatorSchema } = require("../validators/user.validator");
// const { userValidator } = require("./../validators/user.validator");
// const validate = require("../middlewares/validate");

const router = express.Router();
//<-------------Express validator---------------->
// router.post("/signup", userValidator(),validate, (req, res) => {

//   return res.json({ message: "User Registered Successfully" });
// });
//<---------------------Joi Validator -------------------->
router.post("/signup", async (req, res) => {
  try {
    const result = await userValidatorSchema.validateAsync(req.body);
    console.log(result);
    return res.json({ message: "User Registered Successfully" });
    console.log(result);
    
  } catch (err) {
    const errObject = {};
    const errDetails = err.details[0];
      
    errObject[errDetails.context.key] = errDetails.message.replace(/"/g,"");
    return res.status(500).json(errObject);
  }
});

module.exports = router;
