import {Component, Input} from '@angular/core';
import {Student} from "../../../../dataClasses/student";

@Component({
  selector: 'app-grade-form',
  templateUrl: './grade-form.component.html',
  styleUrls: ['./grade-form.component.css']
})
export class GradeFormComponent {

  @Input() student: Student;
  @Input() gradeValue: number;

  constructor() {
  }

  getGradeInput(studentID: string): number {
    const gradeInput = document.getElementById(`gradeInput_${studentID}`) as HTMLInputElement;
    return Number(gradeInput.value);
  }
}


