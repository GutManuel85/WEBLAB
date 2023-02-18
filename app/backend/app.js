const express = require('express');
const app = express();
const {v4: uuidv4} = require('uuid');
const bodyParser = require('body-parser');

const subjects = [
  {
    id: "0",
    name: "Mathematik",
    code: "MATH",
    description: "Im Fach Mathematik wird Algebra und Geometrie behandelt. Dabei werden theorethische Inputs vermittelt und praktische Übungen gemacht",
  },
  {
    id: "1",
    name: "Deutsch",
    code: "DEUT",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum ",
  },
  {
    id: "2",
    name: "Englisch",
    code: "ENG",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum ",
  },
  {
    id: "3",
    name: "Sport",
    code: "SPO",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum ",
  },
  {
    id: "3",
    name: "Musik",
    code: "MUS",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum ",
  },
]

const students = [
  {
    id: "1",
    firstname: "Sofia",
    lastname: "Müller",
    email: "sofia.mueller@mymail.ch",
    birthdate: "2010-01-01",
    enrolledSubjects: [{
      id: "0",
      name: "Mathematik",
      code: "MATH",
      description: "Im Fach Mathematik wird Algebra und Geometrie behandelt. Dabei werden theorethische Inputs vermittelt und praktische Übungen gemacht",
    }]
  },
  {
    id: "2",
    firstname: "Joana",
    lastname: "Gutmann",
    email: "joana.gutmann@mymail.ch",
    birthdate: "2010-12-11",
    enrolledSubjects: [{
      id: "1",
      name: "Deutsch",
      code: "DEUT",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum ",
    },
      {
        id: "2",
        name: "Englisch",
        code: "ENG",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum ",
      }]
  },
  {
    id: "3",
    firstname: "Johannes",
    lastname: "Meier",
    email: "johannes.meier@mymail.ch",
    birthdate: "2008-04-05",
    enrolledSubjects: [
      {
        id: "2",
        name: "Englisch",
        code: "ENG",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum ",
      }]
  },

]

app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({extended: true})); // Parse URL-encoded bodies


app.get('/v1/subjects', (req, res, next) => {
  const result = res.body;
  if (result !== null) {
    res.status(200).json({
      operationStatus: 'OK',
      subjects: subjects
    });
    res.end();
  } else {
    res.status(500).json({
      operationStatus: 'NOK',
      subjects: subjects
    });
    res.end();
  }
})

app.get('/v1/subject/:id', (req, res, next) => {
  const result = subjects.filter(subject => subject.id === req.params.id);
  if (result) {
    res.send(result[0]);
  } else {
    res.status(500);
  }
  res.end();
});

app.post("/v1/subjects", (req, res) => {
  const requestBody = req.body;
  console.log(requestBody);
  subjects.push(requestBody);
  res.status(201);
  res.end();
});

app.get('/v1/students', (req, res, next) => {
  const result = res.body;
  if (result !== null) {
    res.status(200).json({
      operationStatus: 'OK',
      students: students
    });
    res.end();
  } else {
    res.status(500).json({
      operationStatus: 'NOK',
      students: students
    });
    res.end();
  }
})

app.get('/v1/student/:id', (req, res, next) => {
  const result = students.filter(student => student.id === req.params.id);
  if (result) {
    res.send(result[0]);
  } else {
    res.status(500);
  }
  res.end();
});

app.post('/v1/students', (req, res, next) => {
  const requestBody = req.body;
  console.log(requestBody);
  students.push(requestBody);
  res.status(201);
  res.end();
})

app.put('/v1/student/:id', (req, res, next) => {
  console.log("Put called on server")
  const id = req.params.id;
  const requestBody = req.body;

  // Find the index of the student with the given ID
  const index = students.findIndex(student => student.id === id);

  if (index !== -1) {
    // Update the student with the given ID
    students[index] = { ...students[index], ...requestBody };

    // Return the updated student in the response
    res.json(students[index]);
  } else {
    // Return 404 if the student is not found
    res.status(404).end();
  }
});

app.delete('/v1/student/:id', (req, res, next) => {
  const requestBody = req.body;
  console.log("delete from the server");
  console.log(requestBody);
  const index = students.findIndex(studentObj => studentObj.id === req.params.id);
  if (index !== -1) {
    students.splice(index, 1);
    res.status(200);
  } else {
    res.status(500);
  }
  res.end();
});

module.exports = app;
