import {Student} from "../dataClasses/student";
import {formatDate} from "@angular/common";
import {Subject} from "../dataClasses/subject";

const student1: Student = new Student("Hans", "Muster", "hans@mail.com", "2010-10-10",
  []);
const student2: Student = new Student("Joana", "Gutmann", "joana@mail.com", "2011-11-11",
  []);

export const STUDENTS: Student[] = [student1, student2]
