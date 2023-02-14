import {Component, Input} from '@angular/core';
import {Student} from "../../../../dataClasses/student";

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent {

  @Input() student: Student;
  @Input() searchString: string;

  constructor(){
  }
}
