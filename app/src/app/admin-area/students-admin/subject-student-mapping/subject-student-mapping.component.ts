import {Component, Input} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {SubjectService} from "../../../services/subject.service";
import {Student} from "../../../dataClasses/student";
import {Subject} from "../../../dataClasses/subject";
import {StudentService} from "../../../services/student.service";
import {filter, from, map, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-subject-student-mapping',
  templateUrl: './subject-student-mapping.component.html',
  styleUrls: ['./subject-student-mapping.component.css']
})
export class SubjectStudentMappingComponent {

  @Input() student?: Student;
  notEnrolled: any[] = [];
  enrolled: any[] = [];
  tempEnrolled: any[] = [];

  constructor(
    private subjectService: SubjectService,
    private studentService: StudentService,
    private route: ActivatedRoute, //This component is interested in the route's parameters extracted from the URL
    private location: Location //The location is an Angular service for interacting with the browser. This service lets you navigate back to the previous view.
  ) {
  }

  ngOnInit() {
    console.log("called ngOnInit()");

    this.getStudent().subscribe((student) => {
      this.student = student;
      console.log(`${this.student.lastname} ${this.student.firstname}`);
      this.getEnrolledSubjects(this.student).subscribe((enrolled) => {
        this.enrolled = enrolled;
        console.log(this.enrolled);
      });
      this.getNotEnrolledSubjects(this.student).subscribe((notEnrolled) => {
        this.notEnrolled = notEnrolled;
        console.log(this.notEnrolled);
      });
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log("called drop()")
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    console.log(event.container.id);
    if (event.container.id === "cdk-drop-list-1") {
      this.tempEnrolled = event.container.data;
    }
    console.log("Log from the tempEnrolled")
    console.log(this.tempEnrolled);
    console.log('Log from the enrolled');
    console.log(this.enrolled);
    console.log('Log from the notEnrolled');
    console.log(this.notEnrolled);
  }

  getStudent(): Observable<Student> {
    console.log("called getStudent()");
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    return this.studentService.getStudent(id);
  }


  getEnrolledSubjects(student: Student): Observable<Subject[]> {
    console.log("getEnrolledSubjects()");
    return this.studentService.getEnrolledSubjects(student);
  }


  getNotEnrolledSubjects(student: Student): Observable<Subject[]> {
    console.log("getNotEnrolledSubjects()");
    return this.subjectService.getSubjects().pipe(
      map(allArray => allArray.filter(a => !this.enrolled.some(b => a.id === b.id)))
    );
  }

  goBack(): void {
    console.log("called back()");
    this.location.back();
  }

  save(): void{
    console.log("called save()");
    this.enrolled = this.tempEnrolled;
    this.getEnrolledSubjects(this.student);
    console.log('Log from the enrolled');
    console.log(this.enrolled);
    console.log('Log from the notEnrolled');
    console.log(this.notEnrolled);
    console.log('Log the saved student');
    console.log(this.student);
    this.studentService.updateStudent(this.student).subscribe(response => {
      console.log("Student updated");
      console.log(response);
    });
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
