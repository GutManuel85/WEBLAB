import {Injectable} from '@angular/core';
import {Student} from "../dataClasses/student";
import {STUDENTS} from "../mocks/students";
import {Observable, of} from 'rxjs';
import {Subject} from "../dataClasses/subject";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() {
  }

  getStudents(): Observable<Student[]> {
    return of(STUDENTS);
  }

  addStudent(student :Student): void {
    STUDENTS.push(student);
    console.log(STUDENTS);
  }

  getEnrolledSubjects(student :Student) :Observable<Subject[]>{
    return of(student.enrolledSubjects)
  }
}

