const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true
  },
  phone: {
    type: String
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'others'],
    default: 'others'
  },
  avatar: {
    type: String
  },
  fullName: {
    type: String
  },
  address: {
    type: String
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Admin', AdminSchema)
