import {Component} from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {Student} from "../../../dataClasses/student";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  students: Student[] = [];
  mySearchString :string = '';

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void{
    this.getStudents();
    console.log(this.students);
  }

  getStudents(): void{
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }
}
