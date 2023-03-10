const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['admin', 'teacher', 'student']}
  }
)

module.exports = mongoose.model('User', userSchema);
