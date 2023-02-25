import {Component} from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {Student} from "../../../dataClasses/student";
import {ActivatedRoute, Router} from "@angular/router";
import {ReloadRouteService} from "../../../services/reload-router.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  students: Student[] = [];
  mySearchString :string = '';

  constructor(private studentService: StudentService,
              private reloadRouteService: ReloadRouteService,
              private router: Router,
              private route: ActivatedRoute
              ) {
  }

  ngOnInit(): void{
    this.getStudents();
    console.log(this.students);
  }

  getStudents(): void{
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }

  reloadList(): void{
    console.log("reloadList was called")
    this.reloadRouteService.redirectTo("./students-admin");
  }
}
