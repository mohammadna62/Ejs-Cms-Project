const { body } = require("express-validator");
const courseValidator = () => {
  return [
    body("title").notEmpty().withMessage("عنوان دوره نمی تواند خالی باشد").isLength({min:3 , max:20}).withMessage("عنوان دوره باید بین 3 تا 20 کاراکتر باشد")
  ];
};

module.exports = { courseValidator };
