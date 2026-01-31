// HOF
const validate = (schema) => {
  return async (req, res, next) => {
    try {

      await schema.validateAsync(req.body); // 400

      next();
    } catch (err) {
      if (err.isJoi) {
        const errObject = {};
        const errorDetails = err.details[0];
        errObject[errorDetails.context.key] = errorDetails.message.replace(
          /"/g,
          ""
        );
        return res.status(400).json(errObject); // 400
      }

      return res.status(500).json({ message: err.message }); // 500
    }
  };
};

module.exports = validate;
