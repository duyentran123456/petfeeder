const express = require('express')
const { validate } = require('express-validation')
const { feedOnClick, changeOnClickWeight, createPresetFeed, updatePresetFeed, deletePresetFeed, updatePetDetectedFeed } = require('../controllers/feeding.controller')
const { authUser } = require('../middlewares/auth.middleware')
const asyncWrap = require('../utils/asyncWrap')
const { createPresetFeedValidation, changeOnClickWeightValidation, updatePresetFeedValidation, deletePresetFeedValidation, updatePetDetectedFeedValidation } = require('../validations/feeding.validation')

const router = express.Router()

router.post('/onClick/:deviceId', authUser, asyncWrap(feedOnClick))
router.put('/onClick/:deviceId', validate(changeOnClickWeightValidation), authUser, asyncWrap(changeOnClickWeight))

router.post('/preset/:deviceId', validate(createPresetFeedValidation), authUser, asyncWrap(createPresetFeed))
router.put('/preset/:deviceId/:presetId', validate(updatePresetFeedValidation), authUser, asyncWrap(updatePresetFeed))
router.delete('/preset/:deviceId/:presetId', validate(deletePresetFeedValidation), authUser, asyncWrap(deletePresetFeed))

router.put('/petDetected/:deviceId', validate(updatePetDetectedFeedValidation), authUser, asyncWrap(updatePetDetectedFeed))

module.exports = router
