const validate =  (schema) => {
    return async(req, res, next)=>{
        try {
     await schema.validateAsync(req.body);
     next()
  } catch (err) {
    const errObject = {};
    const errDetails = err.details[0];

    errObject[errDetails.context.key] = errDetails.message.replace(/"/g, "");
    return res.status(500).json(errObject);
  }
    }

};

module.exports = validate;
