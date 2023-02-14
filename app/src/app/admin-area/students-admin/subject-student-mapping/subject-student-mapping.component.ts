import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {SubjectService} from "../../../services/subject.service";
import {Student} from "../../../dataClasses/student";
import {Subject} from "../../../dataClasses/subject";
import {StudentService} from "../../../services/student.service";
import {filter, from, Observable} from "rxjs";
import {STUDENTS} from "../../../mocks/students";

@Component({
  selector: 'app-subject-student-mapping',
  templateUrl: './subject-student-mapping.component.html',
  styleUrls: ['./subject-student-mapping.component.css']
})
export class SubjectStudentMappingComponent {


  notEnrolled: any[] = [];

  enrolled: any[] = [];

  constructor(private subjectService: SubjectService, private studentService: StudentService) {
  }

  ngOnInit(){
    this.getEnrolledSubjects(STUDENTS[2]);
    console.log(this.enrolled);
    this.getNotEnrolledSubjects(STUDENTS[2]);
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

}
