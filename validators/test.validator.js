const { param, query } = require("express-validator");
const paramValidator = () =>
  param("id").isMongoId().withMessage("آیدی وارد شده معتبر نمی باشد");
const queryValidator = () =>
  query("q")
    .isLength({ min: 3, max: 12 })
    .withMessage("Query Not valid");

module.exports = { paramValidator,queryValidator };
