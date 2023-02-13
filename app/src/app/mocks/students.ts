import {Student} from "../interfaces/studentInterface";
import {formatDate} from "@angular/common";

export const STUDENTS: Student[] = [
  {  id: "0",
    firstname: "Hans",
    lastname: "Muster",
    email: "hans.muster@mymail.ch",
    birthdate: formatDate(new Date("2012-01-01"), 'yyyy-MM-dd', 'en-US')},
  {  id: "1",
    firstname: "Sofia",
    lastname: "Müller",
    email: "sofia.mueller@mymail.ch",
    birthdate: formatDate(new Date("2010-01-01"), 'yyyy-MM-dd', 'en-US')},
  {  id: "0",
    firstname: "Joana",
    lastname: "Gutmann",
    email: "joana.gutmann@mymail.ch",
    birthdate: formatDate(new Date("2010-12-11"), 'yyyy-MM-dd', 'en-US')},
  {  id: "1",
    firstname: "Johannes",
    lastname: "Meier",
    email: "johannes.meier@mymail.ch",
    birthdate: formatDate(new Date("2008-04-05"), 'yyyy-MM-dd', 'en-US')}
]
