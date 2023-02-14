import {StudentInterface} from "./studentInterface";
import {v4 as uuidv4} from 'uuid';
import {Subject} from "./subject";

export class Student implements StudentInterface{

  id: string;
  firstname: string;
  lastname: string;
  email: string;
  birthdate: string;
  enrolledSubjects: Subject[];

  constructor(firstname :string, lastname :string, email :string, birthdate :string, enrolledSubjects :Subject[]) {
    this.id = uuidv4();
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.birthdate = birthdate;
    this.enrolledSubjects = enrolledSubjects;
  }

}
