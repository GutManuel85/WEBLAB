import {Component} from '@angular/core';
import {Subject} from "../../../dataClasses/subject";
import {SubjectService} from "../../../services/subject.service";
import {ActivatedRoute} from "@angular/router";
import {formatDate, Location} from "@angular/common";
import {StudentService} from "../../../services/student.service";
import {Student} from "../../../dataClasses/student";
import {map, Observable, of} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
  gradeForm: FormGroup;
  submitted = false;

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
        this.gradeForm = this.formBuilder.group({
          FormControl: ['', Validators.required],
          gradeFormControl: ['', Validators.required, Validators.min(1), Validators.max(6)]
        });
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
    }
  }

  onSubmit(data: any) {
    this.submitted = true;
    console.log(this.gradeForm.value);
    console.log(this.student);
    console.log(this.subject);
    console.log(this.gradeValue);

    // stop here if form is invalid
    if (this.gradeForm.invalid) {
      console.log('invalid form')
      return;
    }
    console.log('Submit: ', data);
    this.studentService.addGrade(this.subject.id, this.gradeValue, this.student.id);
  }
}




