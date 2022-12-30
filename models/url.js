const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  urlShortner: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Url', urlSchema)