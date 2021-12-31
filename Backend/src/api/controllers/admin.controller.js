const bcrypt = require('bcryptjs/dist/bcrypt')
const APIStatus = require('../constants/APIStatus')
const hashPassword = require('../utils/hashPassword')
const apiResponse = require('../utils/apiResponse')
const { updateAdminPwDb } = require('../db/admin.db')

const changePassword = async (req, res, next) => {
  const { oldPassword, newPassword } = req.body
  const admin = req.admin

  bcrypt.compare(oldPassword, admin.password, async (err, result) => {
    if (result) {
      const hashedPw = await hashPassword(newPassword)
      const rs = await updateAdminPwDb({ adminId: admin._id, password: hashedPw })

      return res.status(200).json(apiResponse({ status: APIStatus.SUCCESS, data: { rs } }))
    }
    if (err) {
      return res.status(500).json(apiResponse({ status: APIStatus.ERROR, msg: 'Internal Server Error' }))
    }
    return res.status(400).json(apiResponse({ status: APIStatus.FAIL, msg: 'Old password is wrong' }))
  })
}

module.exports = {
  changePassword
}
