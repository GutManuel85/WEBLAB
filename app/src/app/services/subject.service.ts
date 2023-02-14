import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Subject} from "../dataClasses/subject";
import {SUBJECTS} from "../mocks/subjects";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() {
  }

  getSubjects(): Observable<Subject[]> {
    return of(SUBJECTS);
  }

  addSubject(subject :Subject): void {
    SUBJECTS.push(subject);
    console.log(SUBJECTS);
  }
}
