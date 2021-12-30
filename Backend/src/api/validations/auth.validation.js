const { Joi } = require('express-validation')

const loginValidation = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
  })
}

const signupValidation = {
  body: Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
  })
}

module.exports = {
  loginValidation,
  signupValidation
}
