import {Injectable} from '@angular/core';
import {map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Subject} from "../dataClasses/subject";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  subjects: Subject[];

  constructor(private http: HttpClient) {
    console.log("subject constructor called");
  }

  ngOnInit() {
    console.log("ngOnInit called");
    this.subjects = [];
  }

  getSubjects(): Observable<Subject[]> {
    console.log("subject.service: getSubjects() was called");
    return this.http.get<{ operationStatus, subjects: Subject[] }>('/api/v1/subjects')
      .pipe(
        map((subjectData) => {
          console.log(subjectData.operationStatus);
          console.log(subjectData.subjects);
          this.subjects = subjectData.subjects;
          return this.subjects;
        })
      );
  }

  addSubject(subject: Subject): void {
    console.log("addSubject called");
    this.http.post('/api/v1/subjects', subject,
    ).subscribe(
      (response) => {
        console.log("POST successful: ");
      },
      (error) => {
        console.log("POST error: ", error);
      }
    );
  }
}
