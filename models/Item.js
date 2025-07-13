const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: { type: String, enum: ['lost', 'found'], required: true },
  location: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Item', itemSchema);
