import {Injectable} from '@angular/core';
import {Student} from "../interfaces/studentInterface";
import {STUDENTS} from "../mocks/students";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() {
  }

  getStudents(): Student[] {
    return STUDENTS
  }
}

