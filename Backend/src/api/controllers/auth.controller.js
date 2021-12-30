const bcrypt = require('bcryptjs')
const { getUserDb, createUserDb } = require('../db/user.db')
const { getAdminDb } = require('../db/admin.db')
const apiResponse = require('../utils/apiResponse')
const APIStatus = require('../constants/APIStatus')
const genToken = require('../utils/genToken')
const hashPassword = require('../utils/hashPassword')

const login = async (req, res, next) => {
  const { username, password } = req.body
  const user = await getUserDb({ username })
  if (!user) {
    return res.status(400).json(
      apiResponse({
        status: APIStatus.FAIL,
        msg: 'Username or password wrong'
      })
    )
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      const token = genToken(user._id)
      return res.status(200).json(apiResponse({ status: APIStatus.SUCCESS, data: { token } }))
    }
    if (err) {
      return res.status(500).json(apiResponse({ status: APIStatus.ERROR, msg: 'Internal Server Error' }))
    }
    return res.status(200).json(apiResponse({ status: APIStatus.FAIL, msg: 'Username or password wrong' }))
  })
}

const signup = async (req, res, next) => {
  const { email, phone, username, password } = req.body
  const [user1, user2, user3] = await Promise.all([getUserDb({ email }), getUserDb({ phone }), getUserDb({ username })])
  if (user1 || user2 || user3) { return res.status(400).json(apiResponse({ status: APIStatus.FAIL, msg: 'email or username existed' })) }

  const hashedPw = await hashPassword(password)
  const user = await createUserDb({ email, phone, username, password: hashedPw })
  if (!user) return res.status(400).json(apiResponse({ status: APIStatus.ERROR, msg: 'can not create new user' }))

  const token = genToken(user._id)
  return res.status(200).json(apiResponse({ status: APIStatus.SUCCESS, data: { token } }))
}

const loginAdmin = async (req, res, next) => {
  const { username, password } = req.body
  const admin = await getAdminDb({ username })
  if (!admin) {
    return res.status(400).json(
      apiResponse({
        status: APIStatus.FAIL,
        msg: 'Username or password wrong'
      })
    )
  }

  bcrypt.compare(password, admin.password, (err, result) => {
    if (result) {
      const token = genToken(admin._id)
      return res.status(200).json(apiResponse({ status: APIStatus.SUCCESS, data: { token } }))
    }
    if (err) {
      return res.status(500).json(apiResponse({ status: APIStatus.ERROR, msg: 'Internal Server Error' }))
    }
    return res.status(200).json(apiResponse({ status: APIStatus.FAIL, msg: 'Username or password wrong' }))
  })
}

module.exports = {
  login, signup, loginAdmin
}
