import {Component, Input} from '@angular/core';
import {Student} from "../../../../dataClasses/student";
import {StudentService} from "../../../../services/student.service";

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent {

  @Input() student: Student;
  @Input() searchString: string;

  constructor(private studentService :StudentService){
  }

  onButtonClick($event: MouseEvent) {
    const target = $event.currentTarget as HTMLButtonElement;
    if (target.id === 'enrollButton') {
      console.log(`enrollButton clicked for student ${this.student.id}`);
    } else if (target.id === 'deleteButton') {
      console.log("deleteButton clicked");
      console.log(`${this.student.firstname} ${this.student.lastname} wurde gelöscht`)
      this.studentService.deleteStudent(this.student)
    }
  }
}
