import {Component, Input} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {SubjectService} from "../../../services/subject.service";
import {Student} from "../../../dataClasses/student";
import {Subject} from "../../../dataClasses/subject";
import {StudentService} from "../../../services/student.service";
import {filter, from, Observable} from "rxjs";
import {STUDENTS} from "../../../mocks/students";
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

  constructor(
    private subjectService: SubjectService,
    private studentService: StudentService,
    private route: ActivatedRoute, //This component is interested in the route's parameters extracted from the URL
    private location: Location //The location is an Angular service for interacting with the browser. This service lets you navigate back to the previous view.
  ) {
  }

  ngOnInit() {
    this.getStudent();
    console.log(`${this.student.lastname} ${this.student.firstname}`)
    this.getEnrolledSubjects(STUDENTS[this.student.id]);
    console.log(this.enrolled);
    this.getNotEnrolledSubjects(STUDENTS[this.student.id]);
    console.log(this.notEnrolled);
  }

  drop(event: CdkDragDrop<string[]>) {
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
  }

  getStudent(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id)
      .subscribe(student => this.student = student);
  }

  getEnrolledSubjects(student: Student): void {
    this.studentService.getEnrolledSubjects(student)
      .subscribe(subjects => this.enrolled = subjects);
  }

  getNotEnrolledSubjects(student: Student): void {
    const allSubjects: Observable<Subject[]> = this.subjectService.getSubjects();
    let allArray;
    allSubjects.subscribe(value => allArray = value);
    console.log(allArray);
    this.notEnrolled = allArray.filter(a => !this.enrolled.some(b => a.id === b.id));
  }

  goBack(): void {
    this.location.back();
  }

  onButtonClick($event: MouseEvent) {
    const target = $event.currentTarget as HTMLButtonElement;
    if (target.id === 'save') {
      console.log(`save was clicked`);
    } else if (target.id === 'back') {
      console.log(`back was clicked`);
      this.goBack();
    }
  }
}
