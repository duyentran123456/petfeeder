const { Joi } = require('express-validation')

const changePasswordValidation = {
  body: Joi.object({
    oldPassword: Joi.string().required(),
    newPassword: Joi.string().required()
  })
}

module.exports = {
  changePasswordValidation
}
