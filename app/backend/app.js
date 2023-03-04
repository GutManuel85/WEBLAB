const express = require('express');
const {v4: uuidv4} = require('uuid');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const Subject = require('./models/subject');
const Student = require('./models/student');
const User = require('./models/user')

const app = express();

mongoose.connect('mongodb+srv://AdminUser:amgNDdq5MdB4sAcr@cluster0.qbv4oji.mongodb.net/gradeUp?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.log('Connection failed');
    console.log(error);
  });

app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({extended: true})); // Parse URL-encoded bodies

app.post('/v1/user', (req, res, next) => {
  User.find({email: req.body.email})
    .then(documents => {
      console.log(documents);
      if (documents !== null) {
        res.status(200).json({
          operationStatus: 'OK',
          users: documents
        });
        console.log("User found");
        res.end();
      } else {
        res.status(500).json({
          operationStatus: 'NOK',
          users: documents
        });
        console.log("User not found");
        res.end();
      }
    });
});

app.get('/v1/subjects', (req, res, next) => {
  Subject.find()
    .then(documents => {
      //console.log(documents);
      if (documents !== null) {
        res.status(200).json({
          operationStatus: 'OK',
          subjects: documents
        });
        res.end();
      } else {
        res.status(500).json({
          operationStatus: 'NOK',
          subjects: documents
        });
        res.end();
      }
    });
})

app.get('/v1/subject/:id', (req, res, next) => {
  Subject.find({id: req.params.id})
    .then(documents => {
      //console.log(documents);
      if (documents) {
        res.send(documents[0]);
      } else {
        res.status(500);
      }
      res.end();
    })
});

app.post("/v1/subjects", (req, res) => {
  const date = getTimestamp();
  const subject = new Subject({
    id: req.body.id,
    name: req.body.name,
    code: req.body.code,
    description: req.body.description,
    timestamp: date,
  })
  //console.log(subject);
  subject.save();
  res.status(201);
  res.end();
});

app.get('/v1/students', (req, res, next) => {
  Student.find()
    .then(documents => {
      //console.log(documents);
      if (documents !== null) {
        res.status(200).json({
          operationStatus: 'OK',
          students: documents
        });
        res.end();
      } else {
        res.status(500).json({
          operationStatus: 'NOK',
          students: documents
        });
        res.end();
      }
    });
})

app.get('/v1/student/:id', (req, res, next) => {
  Student.find({id: req.params.id})
    .then(documents => {
      //console.log(documents);
      if (documents) {
        res.send(documents[0]);
      } else {
        res.status(500);
      }
      res.end();
    })
});

app.post('/v1/students', (req, res, next) => {
  const date = getTimestamp();
  const student = new Student({
    id: req.body.id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    birthdate: req.body.birthdate,
    enrolledSubjects: req.body.enrolledSubjects,
    grades: req.body.grades,
    timestamp: date,
  })
  //console.log(student);
  student.save();
  res.status(201);
  res.end();
})


app.put('/v1/student/:id', (req, res, next) => {
  console.log("********************************************PUT****************************")
  const body = req.body;
  console.log(body);
  const updatedFields = {
    id: body.id,
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email,
    birthdate: body.birthdate,
    enrolledSubjects: body.enrolledSubjects,
    grades: body.grades,
  };
  Student.findOneAndUpdate({id: req.params.id}, updatedFields, {new: true})
    .then(updatedStudent => {
      //console.log(updatedStudent);
      if (updatedStudent) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).end();
    });
});


app.delete('/v1/student/:id', (req, res, next) => {
  Student.findOneAndDelete({id: req.params.id}, (error, documents) => {
    if (error) {
      //console.log(error);
      res.status(404);
    } else {
      //console.log("Deleted User : ", documents);
      res.status(200)
    }
    res.end();
  });
});

module.exports = app;

function getTimestamp() {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  return date;
}
