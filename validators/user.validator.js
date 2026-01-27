const { body } = require("express-validator");
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
      .isLength({ min: 8, max: 24 })
      .withMessage("این فیلد باید بین 8 تا 24 کاراکتر باشد")
      .notEmpty()
      .withMessage("این فیلد نمی تواند خالی باشد"),
      body("phone")
      .isMobilePhone(["fa-IR"])
      .withMessage("شماره ت;اس صحیح نمی باشد"),
    body("password").notEmpty().withMessage("این فیلد نمی تواند خالی باشد").isLength({ min: 8, max: 24 })
      .withMessage("این فیلد باید بین 8 تا 24 کاراکتر باشد")
  ];
};

module.exports = { userValidator };
