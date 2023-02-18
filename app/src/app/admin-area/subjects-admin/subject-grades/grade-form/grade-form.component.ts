import {Component, Input} from '@angular/core';
import {Student} from "../../../../dataClasses/student";

@Component({
  selector: 'app-grade-form',
  templateUrl: './grade-form.component.html',
  styleUrls: ['./grade-form.component.css']
})
export class GradeFormComponent {

  @Input() student: Student;

}
