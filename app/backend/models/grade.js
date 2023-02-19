const mongoose = require('mongoose');

const gradeSchema = mongoose.Schema({
  // define the fields for the Grade schema here
});

module.exports = mongoose.model('Grade', gradeSchema, 'gradeSchema');
