const Admin = require('../models/admin.model')

const getAdminDb = async (query) => {
  const admin = await Admin.findOne(query)

  return admin
}

const updateAdminPwDb = async (query) => {
  const { adminId, password } = query
  const admin = await Admin.findById(adminId)
  admin.password = password

  const rs = await admin.save()
  return rs
}

module.exports = {
  getAdminDb,
  updateAdminPwDb
}
