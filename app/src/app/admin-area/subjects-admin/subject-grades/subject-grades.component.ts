import {Component} from '@angular/core';
import {Subject} from "../../../dataClasses/subject";
import {SubjectService} from "../../../services/subject.service";
import {ActivatedRoute} from "@angular/router";
import {formatDate, Location} from "@angular/common";
import {StudentService} from "../../../services/student.service";
import {Student} from "../../../dataClasses/student";
import {map, Observable, of, tap} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSelectModule} from '@angular/material/select';
import {Grade} from "../../../dataClasses/grade";

@Component({
  selector: 'app-subject-grades',
  templateUrl: './subject-grades.component.html',
  styleUrls: ['./subject-grades.component.css']
})
export class SubjectGradesComponent {

  subject: Subject;
  students: Student[];
  enrolledStudents: Student[];
  student: Student;
  gradeValue: number;
  submitted = false;
  successMessageShown: boolean;
  successMessage: string = "Note erfolgreich erfasst";

  constructor(
    private subjectService: SubjectService,
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, //This component is interested in the route's parameters extracted from the URL
    private location: Location //The location is an Angular service for interacting with the browser. This service lets you navigate back to the previous view.
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.subjectService.getSubject(id).subscribe((subject) => {
      this.subject = subject;
    });
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
      this.getStudentsEnrolledInSubject(this.students, this.subject.id).subscribe((enrolledStudents) => {
        this.enrolledStudents = enrolledStudents;
        console.log("******** enrolled Students ************");
        console.log(enrolledStudents);
      });
    });
  }

  getStudentsEnrolledInSubject(students: Student[], subjectID: string): Observable<Student[]> {
    return of(students).pipe(
      map(studentArray => {
        return studentArray.filter(student => {
          return student.enrolledSubjects.some(subject => {
            return subject === subjectID;
          });
        });
      })
    );
  }

  goBack(): void {
    console.log("called back()");
    this.location.back();
  }

  onButtonClick($event: MouseEvent) {
    console.log("called onButtonClick()");
    const target = $event.currentTarget as HTMLButtonElement;
    if (target.id === 'cancel') {
      console.log(`save was clicked`);
      this.goBack();
    } else {
      this.submit()
    }
  }

  submit() {
    this.submitted = true;
    console.log(this.student);
    console.log(this.subject);
    console.log(this.gradeValue);
    this.student.grades.push(new Grade(this.subject.id, this.gradeValue));
    this.studentService.updateStudent(this.student).subscribe(response => {
      console.log("Student updated");
      console.log(response);
      this.showSuccessMessage();
    });
  }

  isNaN(value: any): boolean {
    if (typeof value === 'number') {
      return Number.isNaN(value);
    }
    if (typeof value === 'string') {
      const numericValue = Number.parseFloat(value);
      return Number.isNaN(numericValue);
    }
    return true;
  }

  showSuccessMessage() {
    this.successMessageShown = true;
    setTimeout(() => {
      this.successMessageShown = false;
      this.submitted = false;
    }, 3000);
  }

}




