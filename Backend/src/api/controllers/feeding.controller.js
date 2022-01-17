const APIStatus = require('../constants/APIStatus')
const { changeOnClickWeightDb, createPresetFeedDb, updatePresetFeedDb, deletePresetFeedDb } = require('../db/feeding.db')
const apiResponse = require('../utils/apiResponse')

const feedOnClick = async (req, res, next) => {
  const user = req.user
  const { deviceId } = req.params

  if (!user.devices.includes(deviceId)) return res.status(400).json(apiResponse({ status: APIStatus.FAIL, msg: 'You dont have this device' }))

  // send msg to mqtt
  // [todo]

  return res.status(200).json(apiResponse({ status: APIStatus.SUCCESS, msg: 'Your pet is feeded' }))
}

const changeOnClickWeight = async (req, res, next) => {
  const user = req.user
  const { deviceId } = req.params
  const { weight } = req.body

  if (!user.devices.includes(deviceId)) return res.status(400).json(apiResponse({ status: APIStatus.FAIL, msg: 'You dont have this device' }))
  await changeOnClickWeightDb({ weight, deviceId })

  return res.status(200).json(apiResponse({ status: APIStatus.SUCCESS, msg: 'onclickweight is updated' }))
}

const createPresetFeed = async (req, res, next) => {
  const user = req.user
  const { deviceId } = req.params
  const { status, weight, date } = req.body

  if (!user.devices.includes(deviceId)) return res.status(400).json(apiResponse({ status: APIStatus.FAIL, msg: 'You dont have this device' }))

  const rs = await createPresetFeedDb({ deviceId, status, weight, date })

  // send to mqtt
  // [todo]

  return res.status(200).json(apiResponse({ status: APIStatus.SUCCESS, data: rs }))
}

const updatePresetFeed = async (req, res, next) => {
  const user = req.user
  const { deviceId, presetId } = req.params
  const { status, weight, date } = req.body

  if (!user.devices.includes(deviceId)) return res.status(400).json(apiResponse({ status: APIStatus.FAIL, msg: 'You dont have this device' }))

  const rs = await updatePresetFeedDb({ deviceId, presetId, status, weight, date })
  if (!rs) return res.status(404).json(apiResponse({ status: APIStatus.FAIL, msg: 'This preset doesnt exist' }))

  // send to mqtt
  // [todo]

  return res.status(200).json(apiResponse({ status: APIStatus.SUCCESS, data: rs }))
}

const deletePresetFeed = async (req, res, next) => {
  const user = req.user
  const { deviceId, presetId } = req.params

  if (!user.devices.includes(deviceId)) return res.status(400).json(apiResponse({ status: APIStatus.FAIL, msg: 'You dont have this device' }))

  const rs = await deletePresetFeedDb({ deviceId, presetId })
  if (!rs) return res.status(404).json(apiResponse({ status: APIStatus.FAIL, msg: 'This preset doesnt exist' }))

  // send to mqtt
  // [todo]

  return res.status(200).json(apiResponse({ status: APIStatus.SUCCESS, data: rs }))
}

module.exports = {
  feedOnClick,
  changeOnClickWeight,
  createPresetFeed,
  updatePresetFeed,
  deletePresetFeed
}
