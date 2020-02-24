const mongoose = require('mongoose')
const listItemSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  list: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'list'
  }
}, {timestamps: true})

module.exports = mongoose.model('listitem', listItemSchema)