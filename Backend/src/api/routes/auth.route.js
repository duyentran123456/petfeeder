const express = require('express')
const { validate } = require('express-validation')
const asyncWrap = require('../utils/asyncWrap')
const { login, signup, loginAdmin } = require('../controllers/auth.controller')
const { loginValidation, signupValidation } = require('../validations/auth.validation')

const router = express.Router()

router.post('/user/login', validate(loginValidation), asyncWrap(login))
router.post('/user/signup', validate(signupValidation), asyncWrap(signup))
router.post('/admin/login', validate(loginValidation), asyncWrap(loginAdmin))

module.exports = router
