import {StudentInterface} from "./studentInterface";
import {v4 as uuidv4} from 'uuid';
import {Grade} from "./grade";

export class Student implements StudentInterface{

  id: string;
  firstname: string;
  lastname: string;
  email: string;
  birthdate: string;
  enrolledSubjects: string[];
  grades: Grade[];

  constructor(firstname :string, lastname :string, email :string, birthdate :string, enrolledSubjects :string[]) {
    this.id = uuidv4();
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.birthdate = birthdate;
    this.enrolledSubjects = enrolledSubjects;
    this.grades = [];
  }

  setEnrolledSubjects(enrolledSubjects: string[]) :void{
    this.enrolledSubjects = enrolledSubjects;
  }

}
