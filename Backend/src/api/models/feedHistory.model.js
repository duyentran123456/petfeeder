const mongoose = require('mongoose')

const FeedHistorySchema = new mongoose.Schema({
  device: {
    type: mongoose.Types.ObjectId,
    ref: 'Device'
  },
  detail: [{
    weight: {
      type: Number
    },
    time: {
      type: Date
    }
  }]
})

module.exports = mongoose.model('FeedHistory', FeedHistorySchema)
