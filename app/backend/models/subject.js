const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
  id: {type: String, required: true},
  name: {type: String, required: true},
  code: {type: String, required: true},
  description: {type: String, default: "Beschreibung kann hinzugefügt werden"},
  timestamp: {type: Date, required: true}
});

module.exports = mongoose.model('Subject', subjectSchema);
