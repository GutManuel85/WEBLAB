import { Component } from '@angular/core';
import {Subject} from "../../../dataClasses/subject";
import {SubjectService} from "../../../services/subject.service";

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent {

  subjects: Subject[] = [];
  mySearchString :string = '';

  constructor(private subjectService: SubjectService) {
  }

  ngOnInit(): void{
    this.getSubjects();
    console.log(this.subjects);
  }

  getSubjects(): void{
    this.subjectService.getSubjects()
      .subscribe(subjects => this.subjects = subjects);
  }

}

