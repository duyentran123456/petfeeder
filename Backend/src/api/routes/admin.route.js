const express = require('express')
const { validate } = require('express-validation')
const { changePassword } = require('../controllers/admin.controller')
const { authAdmin } = require('../middlewares/auth.middleware')
const asyncWrap = require('../utils/asyncWrap')
const { changePasswordValidation } = require('../validations/user.validation')

const router = express.Router()

router.post('/change-password', validate(changePasswordValidation), authAdmin, asyncWrap(changePassword))

module.exports = router
