import {Injectable} from '@angular/core';
import {Student} from "../dataClasses/student";
import {STUDENTS} from "../mocks/constructedStudents";
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

  getStudent(id: string): Observable<Student> {
    return of(STUDENTS.find(s => s.id === id)!);
  }

  addStudent(student: Student): void {
    STUDENTS.push(student);
    console.log(STUDENTS);
  }

  deleteStudent(student: Student): void {
    const index = STUDENTS.findIndex(studentObj => studentObj.id === student.id);
    if (index !== -1) {
      STUDENTS.splice(index, 1)
    }
  }

  getEnrolledSubjects(student: Student): Observable<Subject[]> {
    return of(student.enrolledSubjects)
  }
}

