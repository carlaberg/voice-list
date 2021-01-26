const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  commands: {
    confirm: {
      type: String,
      default: 'This is default'
    },
    add: {
      type: String,
      default: 'This is default'
    },
    remove: {
      type: String,
      default: 'This is default'
    }
  }
}, {timestamps: true})

module.exports = mongoose.model('user', userSchema)