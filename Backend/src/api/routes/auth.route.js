const express = require('express')
const { validate } = require('express-validation')
const asyncWrap = require('../utils/asyncWrap')
const { login, signup, loginAdmin, forgetPasswordUser, forgetPasswordAdmin, verifyCodeUser, verifyCodeAdmin } = require('../controllers/auth.controller')
const { loginValidation, signupValidation, forgetPasswordValidation } = require('../validations/auth.validation')

const router = express.Router()

router.post('/user/login', validate(loginValidation), asyncWrap(login))
router.post('/user/signup', validate(signupValidation), asyncWrap(signup))
router.post('/admin/login', validate(loginValidation), asyncWrap(loginAdmin))
router.post('/user/forget-password', validate(forgetPasswordValidation), asyncWrap(forgetPasswordUser))
router.post('/admin/forget-password', validate(forgetPasswordValidation), asyncWrap(forgetPasswordAdmin))

router.get('/user/verify-code', asyncWrap(verifyCodeUser))
router.get('/admin/verify-code', asyncWrap(verifyCodeAdmin))

module.exports = router
