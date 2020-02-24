const mongoose = require('mongoose')
const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  items: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'listitem'
  }],
  createdBy: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: 'user'
  }
}, {timestamps: true})

module.exports = mongoose.model('list', listSchema)