import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Student} from "../dataClasses/student";
import {STUDENTS} from "../mocks/constructedStudents"; //ToDo: Ausbauen
import {map, Observable, of, tap} from 'rxjs';
import {Subject} from "../dataClasses/subject";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    console.log("ngOnInit called");
    this.students = [];
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<{ operationStatus, students: Student[] }>('/api/v1/students')
      .pipe(
        map((studentData) => {
          console.log(studentData.operationStatus);
          console.log(studentData.students);
          this.students = studentData.students;
          return this.students;
        })
      );
  }

  getStudent(id: string): Observable<any> {
    return this.http.get<any>(`/api/v1/student/${id}`);
  }

  addStudent(student: Student): void {
    console.log("add from the student service");
    let url = '/api/v1/students';
    console.log(url);
    this.http.post(url, student)
      .subscribe(
        () => console.log('Student added successfully.'),
        error => console.error('Error adding student:', error)
      );
  }

  updateStudent(student: Student): Observable<any> {
    console.log("update from the student service");
    console.log(student);
    const url = `/api/v1/student/${student.id}`;
    return this.http.put(url, student);
  }

  deleteStudent(student: Student): void {
    console.log("delete from the student service");
    let url = `/api/v1/student/${student.id}`;
    console.log(url);
    this.http.delete(url)
      .subscribe(
        () => console.log('Student deleted successfully.'),
        error => console.error('Error deleting student:', error)
      );
  }


  getEnrolledSubjects(student: Student): Observable<Subject[]> {
    return of(student.enrolledSubjects);
  }
}

