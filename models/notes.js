const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
  title: String,
  content: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Notes = mongoose.model('notes', notesSchema);
module.exports = Notes;
