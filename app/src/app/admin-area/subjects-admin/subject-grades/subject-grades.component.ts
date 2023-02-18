import {Component} from '@angular/core';
import {Subject} from "../../../dataClasses/subject";
import {SubjectService} from "../../../services/subject.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {StudentService} from "../../../services/student.service";
import {Student} from "../../../dataClasses/student";
import {map, Observable, of} from "rxjs";

class Students {
}

@Component({
  selector: 'app-subject-grades',
  templateUrl: './subject-grades.component.html',
  styleUrls: ['./subject-grades.component.css']
})
export class SubjectGradesComponent {

  subject: Subject;
  students: Student[];
  enrolledStudents: Student[];

  constructor(
    private subjectService: SubjectService,
    private studentService: StudentService,
    private route: ActivatedRoute, //This component is interested in the route's parameters extracted from the URL
    private location: Location //The location is an Angular service for interacting with the browser. This service lets you navigate back to the previous view.
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.subjectService.getSubject(id).subscribe((subject) => {
      this.subject = subject;
    });
    this.studentService.getStudents().subscribe((students)=> {
      this.students = students;
      this.getStudentsEnrolledInSubject(this.students, this.subject.id).subscribe((enrolledStudents)=> {
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
            return subject.id === subjectID;
          });
        });
      })
    );
  }

  goBack(): void {
    console.log("called back()");
    this.location.back();
  }

  save(): void{
    console.log("called save()");
/*    this.studentService.updateStudent(this.student).subscribe(response => {
      console.log("Student updated");
      console.log(response);
    });*/
  }

  onButtonClick($event: MouseEvent) {
    console.log("called onButtonClick()");
    const target = $event.currentTarget as HTMLButtonElement;
    if (target.id === 'ok') {
      console.log(`save was clicked`);
      this.save();
      this.goBack();
    }else{
      console.log('cancel was clicked');
      this.goBack()
    }
  }
}
