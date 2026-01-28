const { body } = require("express-validator");
const Joi = require("joi")
// Express Validator
const userValidator = () => {
  return [
    body("firstname")
      .isString()
      .withMessage("لطفا متن وارد نمایید")
      .notEmpty()
      .withMessage("این فیلد نمی تواند خالی باشد")
      .isLength({ min: 3, max: 15 })
      .withMessage("این فیلد باید بین 3 تا 15 کاراکتر باشد"),
    body("lastname")
      .isString()
      .withMessage("لطفا متن وارد نمایید")
      .notEmpty()
      .withMessage("این فیلد نمی تواند خالی باشد")
      .isLength({ min: 3, max: 15 })
      .withMessage("این فیلد باید بین 3 تا 15 کاراکتر باشد"),
    body("username")
      .isString()
      .withMessage("لطفا متن وارد نمایید")
      .notEmpty()
      .withMessage("این فیلد نمی تواند خالی باشد")
      .isLength({ min: 8, max: 24 })
      .withMessage("این فیلد باید بین 8 تا 24 کاراکتر باشد"),
    body("email")
      .isEmail({ min: 8, max: 24 })
      .withMessage("فرمت ایمیل صحیح نیست")
      .notEmpty()
      .withMessage("این فیلد نمی تواند خالی باشد"),
    body("phone")
      .isMobilePhone(["fa-IR"])
      .withMessage("شماره ت;اس صحیح نمی باشد"),
    body("password")
      .notEmpty()
      .withMessage("این فیلد نمی تواند خالی باشد")
      .isLength({ min: 8, max: 24 })
      .withMessage("این فیلد باید بین 8 تا 24 کاراکتر باشد"),
    body("confirmPassword").custom((value, { req }) => {
      if (value === req.body.password) {
        return true
      }else {
        throw new Error("پسوردها برابر نمی باسد")
      }
    }),
  ];
};

const userValidatorSchema = Joi.object({
  firstname : Joi.string().lowercase().min(3).max(15).required(),
  lastname: Joi.string().lowercase().min(3).max(15).required(),
  username : Joi.string().min(8).max(24).required(),
  signupMethod : Joi.string().required().valid("email","phone"),
  email : Joi.string().email().min(10).max(40).when("signupMethod",{is:"email", then:Joi.required()}),
  phone : Joi.string().pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/).when("signupMethod",{is:"phone", then:Joi.required()}),
  password : Joi.string().min(8).max(24).required(),
  confirmPassword : Joi.ref("password")
})


module.exports = { userValidator ,userValidatorSchema};
