const { Joi } = require('express-validation')

const changePasswordValidation = {
  body: Joi.object({
    oldPassword: Joi.string().required(),
    newPassword: Joi.string().required()
  })
}

const updateInfoValidation = {
  body: Joi.object({
    gender: Joi.string().valid('male', 'female', 'others'),
    fullName: Joi.string(),
    phone: Joi.string(),
    email: Joi.string().email(),
    dateOfBirth: Joi.string().regex(/^\d{2}\/\d{2}\/\d{4}$/),
  })
}

module.exports = {
  changePasswordValidation,
  updateInfoValidation
}
