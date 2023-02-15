import {Student} from "../dataClasses/student";
import {formatDate} from "@angular/common";
import {Subject} from "../dataClasses/subject";

export const STUDENTS: Student[] = [
  {
    id: "0",
    firstname: "Hans",
    lastname: "Muster",
    email: "hans.muster@mymail.ch",
    birthdate: formatDate(new Date("2012-01-01"), 'yyyy-MM-dd', 'en-US'),
    enrolledSubjects: [{
      id: "0",
      name: "Mathematik",
      code: "MATH",
      description: "Im Fach Mathematik wird Algebra und Geometrie behandelt. Dabei werden theorethische Inputs vermittelt und praktische Übungen gemacht",
    }]
  },
  {
    id: "1",
    firstname: "Sofia",
    lastname: "Müller",
    email: "sofia.mueller@mymail.ch",
    birthdate: formatDate(new Date("2010-01-01"), 'yyyy-MM-dd', 'en-US'),
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
    birthdate: formatDate(new Date("2010-12-11"), 'yyyy-MM-dd', 'en-US'),
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
    birthdate: formatDate(new Date("2008-04-05"), 'yyyy-MM-dd', 'en-US'),
    enrolledSubjects: [
      {
        id: "2",
        name: "Englisch",
        code: "ENG",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum ",
      }]
  },
]
