const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    id: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    birthdate: {type: String, required: true},
    enrolledSubjects: {type: [String], default: []},
    grades: [
      {
      gradeValue: {type: String, required: true},
      subjectId: {type: String, required: true},
    }
    ],
    timestamp: {type: Date, required: true}
  }
)

module.exports = mongoose.model('Student', studentSchema);
