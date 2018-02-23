const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bundleSchema = new Schema({
  build_number: {
    required: true,
    type: Number,
    default: 0
  },
  name: {
    required: true,
    type: String,
    unique: true
  }
}, { timestamps: true } );

const Bundle = mongoose.model('Bundle', bundleSchema);

module.exports = Bundle;
